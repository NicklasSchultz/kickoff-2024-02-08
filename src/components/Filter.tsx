import { useRecoilState } from "recoil";
import { filterAtom, type TodoFilter } from "../state/atoms";

export const Filter = () => {
  // Kommer ta bort denna rad
  const [filter, setFilter] = useRecoilState(filterAtom);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as TodoFilter;
    // Kommer ta bort denna rad
    setFilter(value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Filter: </label>
      <select value={filter} onChange={onChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <br />
    </div>
  );
};
