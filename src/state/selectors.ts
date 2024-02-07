import { selector } from "recoil";
import { todosAtom, filterAtom } from "./atoms";

// TODO implement a selector that returns the filtered list of todos
export const filteredTodoListSelector = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(filterAtom);
    const list = get(todosAtom);

    switch (filter) {
      case "completed":
        return list.filter((item) => item.isCompleted);
      case "uncompleted":
        return list.filter((item) => !item.isCompleted);
      default:
        return list;
    }
  },
});
