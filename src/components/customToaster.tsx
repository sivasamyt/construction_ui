import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";

type Props = {
  inputMessage: string,
  type: string,
};

const CustomToaster: React.FC<Props> = ({inputMessage, type}) => {
  const showToastMessage = (showMessage: string, messageType: string) => {
    if (messageType === "success") {
      toast.success(showMessage, {
        position: toast.POSITION.TOP_LEFT,
      });
    } else {
      toast.error(showMessage, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };
  useEffect(() => {
    showToastMessage(inputMessage, type);
  }, [inputMessage, type]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default CustomToaster;
