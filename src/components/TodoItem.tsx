import { type Todo } from "../state/atoms";

export const TodoItem = ({ todo, index }: { todo?: Todo; index: number }) => {
  const onDelete = () => {
    // TODO Im not implemented
  };

  const onComplete = () => {
    // TODO Im not implemented
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
