import { toast } from "react-toastify";

class Toast {

  config: any | null | undefined;

  constructor() {
    this.config = {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    };
  }

  success(text: string) {
    toast.success(`🦄 ${text}`, this.config);
  }

  error(text: string) {
    toast.error(`🦄 ${text}`, this.config);
  }

  warn(text: string) {
    toast.warn(`🦄 ${text}`, this.config);
  }

  info(text: string) {
    toast.info(`🦄 ${text}`, this.config);
  }

  default(text: string) {
    toast(`🦄 ${text}`, this.config);
  }
}

export default new Toast();