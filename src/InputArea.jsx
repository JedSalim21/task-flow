import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const InputArea = ({ onAdd }) => {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleClick() {
    if (!inputText.trim()) return;

    onAdd(inputText);
    setInputText("");
  }

  return (
    <div className="flex gap-2">
      <input
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        value={inputText}
        className="flex-1 p-2 rounded-md bg-slate-800 text-white outline-none"
        placeholder="Add tast..."
      />
      <button
        onClick={handleClick}
        className="bg-green-400 px-3 rounded-md text-white hover:bg-green-500 transition-color duration-400 ml-2 hover:scale-125"
      >
        <AddIcon />
      </button>
    </div>
  );
};

export default InputArea;
