import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../todoFeatures/todo/todoSlice";

const TodosList = () => {
  const todos = useSelector((state) => state.reducer.todos);
  console.log(todos, "todos");
  const dispatch = useDispatch();
  return (
    <div className="m-2 flex justify-center items-center gap-3 p-3"> 
      {todos.map((item) => (
        <li className=" max-w-[300px] sm:min-w-[400px] inline-flex text-white bg-green-800 rounded gap-2  " key={item.id}>
         <div className=" max-w-[300px]  sm:min-w-[395px] p-2 mr-3 rounded" > {item.todoList}</div>
        <div className="ml-10px pr-10px gap-2"> <button onClick={() => dispatch(removeTodo(item.id))} className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
</button></div> 
        </li>
      ))}
    </div>
  );
};

export default TodosList;
