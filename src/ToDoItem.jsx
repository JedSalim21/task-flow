import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useState } from "react";

const ToDoItem = ({ text, onChecked, id }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <li className="flex items-center justify-center bg-slate-800 p-3 rounded-lg text-white ">
      <button
        onClick={() => setIsDone((prev) => !prev)}
        className="flex items-center justify-items-start hover:text-green-500"
      >
        {isDone ?
          <CheckBoxIcon />
        : <CheckBoxOutlineBlankIcon />}
      </button>
      <span
        className={`transition-all ${isDone ? "line-through opacity-50" : ""} flex flex-1 justify-center items-center`}
      >
        {text}
      </span>

      <button
        onClick={() => onChecked(id)}
        className="flex items-center justify-items-end hover:text-rose-500 transition-colors duration-300"
      >
        <DeleteIcon />
      </button>
    </li>
  );
};

export default ToDoItem;
