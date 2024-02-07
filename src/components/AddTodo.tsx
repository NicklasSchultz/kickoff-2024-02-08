import { useState } from "react";

export const AddTodo = () => {
  const [todoName, setTodoName] = useState("");

  const onAddTodo = () => {
    // TODO Im not implemented
  };

  return (
    <>
      <input value={todoName} onChange={(e) => setTodoName(e.target.value)} />
      <button onClick={onAddTodo}>Add</button>
    </>
  );
};
