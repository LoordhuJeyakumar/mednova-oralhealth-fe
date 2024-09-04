import { handleError } from "../utils/helper";
import instanceService from "./instanceService";

const userService = {
  signup: async (userData) => {
    try {
      const response = await instanceService.authInstance.post(
        "user/signup",
        userData
      );
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
  login: async (userData) => {
    try {
      const response = await instanceService.authInstance.post(
        "user/login",
        userData
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
  verify: async (token, userId) => {
    try {
      const response = await instanceService.authInstance.get(
        `user/verify/${userId}/${token}`
      );
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
  checkAccessToken: async () => {
    try {
      const response = await instanceService.protectedInstance.get(
        "user/protected-route"
      );
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
  getUser: async () => {
    try {
      const response = await instanceService.protectedInstance.get(
        "user/profile"
      );
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
};

export default userService;
