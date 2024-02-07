import { useRecoilState } from "recoil";
import { todosAtom, type Todo } from "../state/atoms";

export const TodoItem = ({ todo, index }: { todo?: Todo; index: number }) => {
  // Kommer ta bort denna rad
  const [todoList, setTodoList] = useRecoilState(todosAtom);

  const onDelete = () => {
    // TODO Im not implemented
    // Kommer lämna denna funktion tom
    const todos = [...todoList];
    todos.splice(index, 1);
    setTodoList(todos);
  };

  const onComplete = () => {
    // TODO Im not implemented
    // Kommer lämna denna funktion tom
    const todos = [...todoList];
    const todo = todoList[index];
    todos[index] = { name: todo.name, isCompleted: !todo.isCompleted };
    setTodoList(todos);
  };

  return (
    <li key={`${todo?.name}-${index}`}>
      <span
        onClick={onComplete}
        style={{
          textDecoration: todo?.isCompleted ? "line-through" : "initial",
          marginRight: "10px",
        }}
      >
        {todo?.name}
      </span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};
