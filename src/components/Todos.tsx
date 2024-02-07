import { TodoItem } from "./TodoItem";
import { AddTodo } from "./AddTodo";
import { Filter } from "./Filter";

export const Todos = () => {
  const list = []; // TODO get the list from Recoil

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
