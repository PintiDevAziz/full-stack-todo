import React, { memo, useEffect, useState } from "react";
import { onSnapshot, collection, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import TodoItem from "../components/TodoItem";
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("userToken")) {
      let colRef = collection(db, localStorage.getItem("userToken"));
      onSnapshot(colRef, (snap) => {
        setTodos(snap.docs.map((doc) => doc.data()));
      });
    }
  }, []);

  return (
    <div className="w-[35rem] gap-y-2 flex flex-col items-center">
      {todos.length > 0 ? (
        todos.map((todo, indeks) => <TodoItem key={indeks} todo={todo} />)
      ) : (
        <div>Please wait</div>
      )}
    </div>
  );
};

export default memo(TodoList);
