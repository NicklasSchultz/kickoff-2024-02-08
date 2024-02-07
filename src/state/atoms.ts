import { atom } from "recoil";

export type Todo = {
  name: string;
  isCompleted: boolean;
};

export type TodoFilter = "all" | "completed" | "uncompleted";

// TODO implement a Recoil atom for the list of todos
export const todosAtom = atom<Todo[]>({
  key: "todos",
  default: [],
});

// TODO implement a Recoil atom for filter state
export const filterAtom = atom<TodoFilter>({
  key: "todoFilter",
  default: "all",
});
