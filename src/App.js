import logo from "./logo.svg";
import "./App.css";
import TodosList from "./components/TodosList";
import AddTodos from "./components/AddTodo";

function App() {
  return (
    <div>
     
      <AddTodos />
      <TodosList />
    </div>
  );
}

export default App;
