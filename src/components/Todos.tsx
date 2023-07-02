import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../contex/todos-context";
//that function acts as a functional component.That's what FC stands for functional component.
const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItem
          key={item.id}
          text={item.text}
          //Bind is a default method in JavaScript which allows us to pre-configure a function
          //for future execution. like this in angular.
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
