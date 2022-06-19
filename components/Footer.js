import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
const Footer = () => {
  const { todos } = useContext(MainContext);
  const [activeFilter, setActiveFilter] = useState(0);
  useEffect(() => {}, [todos]);
  return (
    <div className="w-[35rem] bg-[#25273C]  h-14 flex px-4 items-center justify-around rounded">
      <div className="text-gray-500 flex items-center gap-x-1">
        <p className="text-indigo-200  font-semibold">
          {todos.filter((todo) => todo.done === false).length}
        </p>{" "}
        items left
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
