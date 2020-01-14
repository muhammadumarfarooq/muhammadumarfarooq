import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ToastMsg = () => {
  return (
    <div>
      <ToastContainer position={toast.POSITION.BOTTOM_CENTER} />
    </div>
  );
};

export default ToastMsg;
