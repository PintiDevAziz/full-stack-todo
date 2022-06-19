import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
const Index = () => {
  //! create user token on localstorage
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      //!already have token
    } else {
      const token =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      localStorage.setItem("userToken", token);
    }
  }, []);
  return (
    <div className="flex bg-[#181824] items-center justify-center flex-col h-screen w-full">
      <Header />
      <TodoList  />
    </div>
  );
};

export default Index;
