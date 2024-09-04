import { handleError } from "../utils/helper";
import instanceService from "./instanceService";

const userResponseService = {
  submitResponse: async (data) => {
    try {
      const response = await instanceService.protectedInstance.post(
        "user-response/submit",
        data
      );
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
};

export default userResponseService;
