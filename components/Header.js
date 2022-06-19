import React, { useState } from "react";
import { BsSun } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { doc, setDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import AlertBox from "../components/AlertBox";

const Header = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const handleAddTodo = async () => {
    if (input) {
      setError("");
      setInput("");
      const todoId = Math.random().toString(36).substring(2, 15);
      const docRef = doc(db, localStorage.getItem("userToken"), todoId);
      await setDoc(docRef, {
        todo: input,
        addedTime: new serverTimestamp(),
        id: todoId,
        done: false,
      });
    } else {
      setError("Please Enter something for doing");
    }
  };
  return (
    <div className="flex w-[35rem] h-auto flex-col  mb-6 ">
      <AlertBox setError={setError} error={error} />
      <div className="flex items-center justify-between w-full mb-10">
        <h2 className="text-white uppercase text-3xl tracking-[20px]">todo</h2>
        <button className="hover:text-white text-3xl text-gray-500 ">
          <BsSun />
        </button>
      </div>
      <label className="w-full flex items-center gap-x-2">
        <input
          placeholder="Create new todo"
          type="text"
          value={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodo();
            }
          }}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none bg-[#25273c] h-12 rounded px-3 text-white"
        />
        <button
          onClick={handleAddTodo}
          className="hover:text-white text-3xl text-gray-500 "
        >
          <IoIosAddCircleOutline />
        </button>
      </label>
    </div>
  );
};

export default Header;
