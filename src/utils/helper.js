export const handleError = (error) => {
  if (error.response) {
    // Server responded with a status other than 200 range
    console.error(
      `Error: ${error.response.status} - ${error.response.data.message}`
    );
  } else if (error.request) {
    // Request was made but no response was received
    console.error("Error: No response received from server");
  } else {
    // Something else happened while setting up the request
    console.error("Error:", error.message);
  }
  return error;
};
