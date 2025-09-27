import React, { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo, getStats } from "../api/todoApi";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [filter, setFilter] = useState({});
    //   const [stats, setStats] = useState({ completed: 0, pending: 0 });
    const [stats, setStats] = useState({ done: 0, notDone: 0 });

    const fetchTodos = async () => {
        const res = await getTodos({ page, ...filter });
        setTodos(res.data.data);
        setPages(res.data.pages);
    };

    const fetchStats = async () => {
        const res = await getStats();
        setStats(res.data);
    };

    const handleAdd = async () => {
        await fetchTodos();
        await fetchStats();
    };

    const handleEdit = async () => {
        await fetchTodos();
        await fetchStats();
    };

    const handleDelete = async () => {
        await fetchTodos();
        await fetchStats();
    };

    useEffect(() => {
        fetchTodos();
        fetchStats();
        // eslint-disable-next-line
    }, [page, filter]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todo Mern</h1>
            <TodoForm onAdd={handleAdd} />
            <FilterBar filter={filter} setFilter={setFilter} />
            <TodoList
                todos={todos}
                onToggle={handleEdit}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
            <Pagination page={page} pages={pages} setPage={setPage} />
            <div className="mt-4">
                <b>Thống kê:</b> Hoàn thành: {stats.done} | Chưa hoàn thành: {stats.notDone}
            </div>
        </div>
    );
}