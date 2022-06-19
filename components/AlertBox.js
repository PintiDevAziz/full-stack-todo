import React, { useEffect, useState } from "react";

const AlertBox = ({ error, setError }) => {
  setTimeout(() => {
    setError("");
    console.log("still running");
  }, 2000);
  return (
    <div
      className={` ${
        error ? "flex" : " hidden"
      }    absolute right-5 bottom-5  w-auto h-[4rem] text-white  border-2 border-slate-500 rounded-md  items-center justify-center px-4`}
    >
      {error}
    </div>
  );
};

export default AlertBox;