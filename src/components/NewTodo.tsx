import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../contex/todos-context";
//void : that's a function that returns nothing
//but takes one parameter, which is of type string.
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    //current with ? : because the ref is not necessarily set to a value yet when we use it.
    // you can use an exclamation mark (!) instead of a question mark:
    //This special annotation tells TypeScript that you know that this possibly nullish value
    //will never be null in this spot.
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
