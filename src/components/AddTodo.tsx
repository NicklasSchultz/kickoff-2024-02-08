import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosAtom } from "../state/atoms";

export const AddTodo = () => {
  const [todoName, setTodoName] = useState("");
  // Kommer ta bort denna rad
  const setTodoList = useSetRecoilState(todosAtom);

  const onAddTodo = () => {
    // TODO Im not implemented
    // Kommer lämna denna funktion tom
    setTodoList((todosAtom) => [
      ...todosAtom,
      { name: todoName, isCompleted: false },
    ]);
  };

  return (
    <>
      <input value={todoName} onChange={(e) => setTodoName(e.target.value)} />
      <button onClick={onAddTodo}>Add</button>
    </>
  );
};
