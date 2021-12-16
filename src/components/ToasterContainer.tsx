import React from "react";
import { ToastContainer } from "react-toastify";
import { useAuth } from "utils/contexts/useAuth";

const ToasterContainer = () => {
  const { isShow } = useAuth();
    console.log(isShow)
  return (
    <>
      {isShow && (
        <ToastContainer
          position="bottom-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          limit={10}
          theme={"colored"}
        />
      )}
    </>
  );
};

export default ToasterContainer;
