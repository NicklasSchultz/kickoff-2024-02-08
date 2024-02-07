import { useRecoilValue } from "recoil";
import { TodoItem } from "./TodoItem";
import { AddTodo } from "./AddTodo";
import { Filter } from "./Filter";
import { filteredTodoListSelector } from "../state/selectors";

export const Todos = () => {
  const list = useRecoilValue(filteredTodoListSelector);

  return (
    <div>
      <h2>Todos</h2>
      <Filter />
      <AddTodo />
      <ul style={{ listStyle: "none" }}>
        {list.map((todo, index) => (
          <TodoItem key={todo.name} todo={todo} index={index} />
        ))}
      </ul>
    </div>
  );
};
