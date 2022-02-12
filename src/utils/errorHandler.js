import { toast } from "react-toastify";

function errorHandler(error) {
  console.error(error);
  if (error.message) {
    toast.error(error.message);
  }
}

export default errorHandler;
