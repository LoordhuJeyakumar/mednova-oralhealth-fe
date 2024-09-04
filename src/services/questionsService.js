import ProtectedRoute from "../routes/ProtectedRoute";
import { handleError } from "../utils/helper";
import instanceService from "./instanceService";

const questionsService = {
  getAllQuestions: async () => {
    try {
      const response = await instanceService.protectedInstance.get(
        "/question/all"
      );
      return { success: true, data: response };
    } catch (error) {
      handleError(error);
      return { success: false, error: error };
    }
  },
};

export default questionsService;
