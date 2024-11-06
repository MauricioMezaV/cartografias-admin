import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";

// Providers
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";
import MyLoginPage from "./pages/Login";

// Resources
import { UserList } from "./resources/users/list";
import { UserCreate } from "./resources/users/create";
import { UserEdit } from "./resources/users/edit";
import { UserIcon } from "./resources/users/icon";

import { MemorialsList } from "./resources/memorials/list";
import { MemorialsCreate } from "./resources/memorials/create";
import { MemorialsEdit } from "./resources/memorials/edit";
import { MemorialsIcon } from "./resources/memorials/icon";

import { PlacesList } from "./resources/places/list";
import { PlacesCreate } from "./resources/places/create";
import { PlacesEdit } from "./resources/places/edit";
import { PlacesIcon } from "./resources/places/icon";

// Styles
import {createTheme} from "@mui/material";

import uploadCapabilities from "./helpers/uploadCapabilities";

const lightTheme = createTheme({
  palette: {
    secondary: {
      main: '#7F00FF',
    },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const enhancedDataProvider = {
  ...dataProvider,
  create: uploadCapabilities(dataProvider.create),
  update: uploadCapabilities(dataProvider.update),
};

export const App = () => (
  <Admin
      dataProvider={enhancedDataProvider}
      authProvider={authProvider}
      theme={lightTheme}
      darkTheme={darkTheme}
      loginPage={MyLoginPage}
  >
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      icon={UserIcon}
    />
    <Resource
      name="places"
      list={PlacesList}
      edit={PlacesEdit}
      create={PlacesCreate}
      icon={PlacesIcon}
    />
    <Resource
      name="memorials"
      list={MemorialsList}
      edit={MemorialsEdit}
      create={MemorialsCreate}
      icon={MemorialsIcon}
    />
  </Admin>
);
