import { toast } from "react-toastify";

export const showSuccessToast = () => {
  toast.success("Item agregado a carro", {
    className: "custom-success-toast",
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showWarningToast = (message: string) => {
  toast.warning(message, {
    className: "custom-warning-toast",
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
