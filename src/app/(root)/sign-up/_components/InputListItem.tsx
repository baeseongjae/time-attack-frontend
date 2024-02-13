function InputListItem({
  email,
  password,
  rePassword,
  labelName,
  id,
  type,
  value,
  onChange,
}) {
  return (
    <>
      <li className="flex flex-col">
        <label htmlFor={id}>{labelName}</label>
        <input
          type={type}
          id={id}
          className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
          value={value}
          onChange={onChange}
        />
      </li>
    </>
  );
}

export default InputListItem;
