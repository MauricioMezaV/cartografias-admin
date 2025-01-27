import { AuthProvider, HttpError } from "react-admin";
import axios from "axios";

const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    try {
      const response = await axios.post('http://localhost:8081/users/login', {
        email,
        password,
      },{
        headers: {
            'Content-Type': 'application/json'
        }
      });

      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }

      const auth = response.data.authToken;
      localStorage.setItem('auth', JSON.stringify(auth));
      return Promise.resolve(response);
    } catch (error) {
      throw new Error('Network error');
      return Promise.reject(error);
    }
  },

  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },

  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("auth") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve('admin');
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("auth");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
