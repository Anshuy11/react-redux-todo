import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../todoFeatures/todo/todoSlice";

const TodosList = () => {
  const todos = useSelector((state) => state.reducer.todos);

  const dispatch = useDispatch();
  return (
    <div className="m-2 grid grid-cols-1 content-center gap-3 p-3"> 
      {todos.map((item) => (
        <div className=" grid grid-cols-1 content-cente  text-white  gap-2  " key={item.id}>
         <div className=" flex justify-center items-center  " > <div className="bg-green-800  p-2 max-w-[300px] sm:min-w-[395px]  mr-3 rounded">{item.todoList}</div><button onClick={() => dispatch(removeTodo(item.id))} className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
</button></div>
    
        </div>
      ))}
    </div>
  );
};

export default TodosList;
