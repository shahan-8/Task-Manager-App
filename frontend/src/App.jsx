import { useState, useEffect } from "react";
import { Pencil, Trash2, Check, X } from "lucide-react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/todo";

function App() {
  const [todos, setTodos] = useState();

  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Save todos whenever they change

  const fetchTodo = async () => {
    try {
      const response = await axios(API_URL);

      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  // Add a new todo
  const addTodo = async (event) => {
    event.preventDefault();

    if (!input.trim()) return;

    try {
      const response = await axios(API_URL, {
        method: "POST",
        data: {
          todo: input.trim(),
        },
      });

      setTodos(response.data);

      setInput("");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  // Start editing a todo
  const startEdit = async (todo) => {
    setEditId(todo.id);
    setEditText(todo.todo);

    // try {
    //   const response = await axios(API_URL, {
    //     method: "PUT",
    //     data: {
    //       id: todo.id,
    //       todo : todo.todo,
    //       isComplete : todo.isComplete
    //     },
    //   });

    // } catch (error) {
    //   console.log(error.response.data.message);
    // }
  };

  // edit todo and Save edited todo
  const saveEdit = async (e, id) => {
    e.preventDefault();

    if (!editText.trim()) return;

    try {
      const currentTodo = todos.find((todo) => todo.id === id);

      const response = await axios.put(API_URL, {
        id: id,
        todo: editText.trim(),
        isComplete: currentTodo.isComplete,
      });

      setTodos(response.data);
      setEditId(null);
      setEditText("");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };
  // Complete or uncomplete a todo
  // Complete or uncomplete a todo
  const toggleTodo = async (id) => {
    try {
      const currentTodo = todos.find((todo) => todo.id === id);

      if (!currentTodo) return;

      const response = await axios.put(API_URL, {
        id: id,
        todo: currentTodo.todo,
        isComplete: !currentTodo.isComplete,
      });

      setTodos(response.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(API_URL, {
        data: { id: id },
      });

      setTodos(response.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#142733] to-[#081521] px-4 py-12 text-slate-300 sm:py-16">
      {" "}
      <div className="mx-auto max-w-xl">
        {/* Heading */}
        <h1 className="mb-8 text-center text-3xl font-bold tracking-wide text-slate-300">
          Todo List
        </h1>

        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="mb-7 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="What needs to be done?"
            className="min-w-0 flex-1 rounded border border-slate-600/70 bg-slate-950/20 px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-500"
          />

          <button
            type="submit"
            className="rounded bg-sky-600 px-4 py-3 text-xs font-semibold text-white transition hover:bg-sky-500"
          >
            ADD TODO
          </button>
        </form>

        {/* Todo List */}
        <ul className="divide-y divide-slate-600/30">
          {todos?.map((todo) => (
            <li key={todo.id} className="flex min-h-14 items-center gap-3 py-3">
              {/* Complete Checkbox */}
              <button
                type="button"
                onClick={() => toggleTodo(todo.id)}
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                  todo.isComplete
                    ? "border-sky-500 bg-sky-600 text-white"
                    : "border-slate-500 hover:border-sky-400"
                }`}
                aria-label="Toggle completion"
              >
                {todo.isComplete && <Check size={12} />}
              </button>

              {/* Edit Input or Todo Text */}
              {editId === todo.id ? (
                <form
                  onSubmit={(e) => saveEdit(e, todo.id)}
                  className="flex min-w-0 flex-1 gap-2"
                >
                  <input
                    autoFocus
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="min-w-0 flex-1 rounded border border-slate-600 bg-slate-950/30 px-2 py-1 text-sm text-white outline-none focus:border-sky-500"
                  />

                  <button type="submit" aria-label="Save">
                    <Check size={20} className="text-emerald-400" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setEditId(null)}
                    aria-label="Cancel edit"
                  >
                    <X size={17} className="text-slate-400" />
                  </button>
                </form>
              ) : (
                <>
                  <span
                    className={`min-w-0 flex-1 wrap-break-word text-sm ${
                      todo.completed
                        ? "text-slate-500 line-through"
                        : "text-slate-300"
                    }`}
                  >
                    {todo.todo}
                  </span>

                  {/* Edit Button */}
                  <button
                    type="button"
                    onClick={() => startEdit(todo)}
                    aria-label="Edit todo"
                    className="rounded p-1 text-slate-500 transition hover:text-sky-400"
                  >
                    <Pencil size={15} />
                  </button>

                  {/* Delete Button */}
                  <button
                    type="button"
                    onClick={() => deleteTodo(todo.id)}
                    aria-label="Delete todo"
                    className="rounded p-1 text-slate-500 transition hover:text-red-400"
                  >
                    <Trash2 size={15} />
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Empty State */}
        {todos?.length === 0 && (
          <p className="py-8 text-center text-sm text-slate-500">
            No tasks yet. Add your first todo!
          </p>
        )}

        {/* Remaining Tasks */}
        <p className="mt-5 text-right text-xs text-slate-500">
          {todos?.filter((todo) => !todo.isComplete).length} tasks remaining
        </p>
      </div>
    </div>
  );
}

export default App;
