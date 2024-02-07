export const Filter = () => {
  // TODO implement the filter state
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {};

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Filter: </label>
      <select value={""} onChange={onChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <br />
    </div>
  );
};
