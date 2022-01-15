export default function Filter({ value, onChange }) {
  return (
    <label>
      <input onChange={onChange} type="text" name="filter" value={value} />
    </label>
  );
}
