import { storageRoot } from "../../../firebaseConfig";
import _ from "lodash";

async function uploadFileToBucket(rawFile, storageRef) {
    try {
        console.log("Uploading file to bucket...");
        const task = storageRef.put(rawFile);

        const taskResult = await task;
        const getDownloadURL = await taskResult.ref.getDownloadURL();
        console.log("File uploaded successfully.");
        return getDownloadURL;
    } catch (error) {
        console.error("Error uploading file to bucket:", error);
        throw new Error({ message: error.message_, status: 401 });
    }
}

function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for (
        objectToInspect = o;
        objectToInspect !== null;
        objectToInspect = Object.getPrototypeOf(objectToInspect)
    ) {
        result = result.concat(Object.entries(objectToInspect));
    }

    return result;
}

const addUploadCapabilities = (requestHandler) => async (
    resource,
    params
) => {
    try {
            const Properties = listAllProperties(params?.data || {}); // Handle undefined params.data
            const filesToUpload = [];

            Properties.forEach((keyValuePair) => {
                const [key, value] = keyValuePair;
                if (value && typeof value === "object" && value.length) {
                    value.forEach((fileCandidate) => {
                        if (_.has(fileCandidate, "rawFile")) {
                            fileCandidate.fieldKey = key;
                            filesToUpload.push(fileCandidate);
                        }
                    });
                }
                if (value && typeof value === "object") {
                    if (_.has(value, "rawFile")) {
                        value.fieldKey = key;
                        filesToUpload.push(value);
                    }
                }
            });

            await createOrUpdateFiles(resource, filesToUpload, uploadFileToBucket);
            return requestHandler( resource, params);

    } catch (error) {
        return requestHandler(type, resource, params);
    }
};


async function createOrUpdateFiles(resource, Files, uploadFile) {
    const promises = Files.map(async (item) => {
        const urlDownload = await createOrUpdateFile(
            resource,
            item.rawFile,
            uploadFile
        );
        delete item.rawFile;
        item.src = urlDownload;
        return item;
    });
    const files = await Promise.all(promises);
    return files;
}

async function createOrUpdateFile(resource, file, uploadFile) {
    try {
        console.log("Creating or updating file...");
        var storageRef = storageRoot.child(resource + "/" + file.name);

        var metadata = await storageRef.getMetadata();
        console.log("File metadata:", metadata);

        if (metadata && metadata.size === file.size) {
            const downloadUrl = await storageRef.getDownloadURL();
            console.log("File already exists. Download URL:", downloadUrl);
            return downloadUrl;
        } else {
            const uploaded = await uploadFile(file, storageRef);
            console.log("File uploaded. Download URL:", uploaded);
            return uploaded;
        }
    } catch (error) {
        console.error("Error creating or updating file:", error);
        const uploaded = await uploadFile(file, storageRef);
        return uploaded;
    }
}

export default addUploadCapabilities;
