import React from "react";

const Toast: React.FC<{
  type: undefined | string;
  message: undefined | string;
}> = ({ type, message }) => {
  return (
    <div
      className={`w-[250px] h-[35px] absolute top-[20px] right-[10px] z-[20] 
        border-2 rounded bg-white
      ${type === "success" ? "border-green-600" : "border-red-600"} `}
    >
      <p className="text-center mt-1">{`<${type}>: ${message}`}</p>
    </div>
  );
};
export default Toast;
