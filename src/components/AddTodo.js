import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoFeatures/todo/todoSlice";

const AddTodo = () => {
  const [add, setAdd] = useState("");
  const dispatch = useDispatch();
  const addTodoFunc = (e) => {
    e.preventDefault();
    if(!!add){
      dispatch(addTodo(add));
      setAdd("");
    }
      
  };

  return (
    <div className="flex justify-center items-center mt-4 ">
      <form onSubmit={addTodoFunc} className="flex justify-center items-center ">
        <input
        required="true"
          type="text"
          className="border text-black mx-2 p-2 text-lg "
          placeholder="Write todo list here "
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
     <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  ADD
</button>
      </form>
    </div>
  );
};

export default AddTodo;
