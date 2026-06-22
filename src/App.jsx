import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";
import { useState, useEffect } from "react";
import { supabase } from "./supabase/client";
import Footer from "./Footer";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  async function addItem(newItem) {
    const { error } = await supabase.from("items").insert({
      task: newItem,
    });

    if (error) {
      console.error(error);
    } else {
      fetchItems();
    }
  }

  async function fetchItems() {
    const { data, error } = await supabase.from("items").select("*");

    if (error) {
      console.error(error);
    } else {
      setItems(data);
    }
  }

  async function deleteItem(id) {
    const { error } = await supabase.from("items").delete().eq("id", id);

    if (error) {
      console.error(error);
    } else {
      fetchItems();
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-xl bg-slate-900 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          Task<span className="text-rose-400"> Flow</span>
        </h1>

        <InputArea onAdd={addItem} />

        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <ToDoItem
              key={item.id}
              id={item.id}
              text={item.task}
              onChecked={deleteItem}
            />
          ))}
        </ul>
        <Footer />
      </div>
    </div>
  );
};

export default App;
