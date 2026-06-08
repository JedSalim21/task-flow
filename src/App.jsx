import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  function addItem(newItem) {
    setItems((prev) => {
      return [...prev, newItem];
    });
  }

  function deleteItem(id) {
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-xl bg-slate-900 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          Task<span className="text-rose-400"> Flow</span>
        </h1>

        <InputArea onAdd={addItem} />

        <ul className="mt-6 space-y-3">
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
