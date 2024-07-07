import { AxiosError } from "axios";
import { toast } from "react-toastify";

export function toastException(exception) {
  if (exception instanceof AxiosError) {
    toast.error(exception.response.data, {
      position: "top-right",
      theme: "dark",
    });

    return;
  }

  toast.error("Something went wrong !", {
    position: "top-right",
    theme: "dark",
  });
}

export function toastSuccess(messsage) {
  toast.success(messsage, {
    position: "top-right",
    theme: "dark",
  });
}
