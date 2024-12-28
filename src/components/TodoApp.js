import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import '../styles/FloatingButton.css';
import Header from './Header';
import TodoList from './TodoList';
import Modal from './Modal';
import { FiPlus } from 'react-icons/fi';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTodo, setCurrentTodo] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const elements = [
            document.documentElement,
            document.body,
            document.getElementById('root')
        ];
        
        elements.forEach(element => {
            if (darkMode) {
                element.classList.add('dark');
            } else {
                element.classList.remove('dark');
            }
        });
    }, [darkMode]);

    const handleAddTodo = (text) => {
        if (currentTodo) {
            setTodos(prevTodos => 
                prevTodos.map(todo => 
                    todo.id === currentTodo.id 
                        ? { ...todo, text } 
                        : todo
                )
            );
        } else {
            const newTodoItem = {
                id: Date.now(),
                text,
                completed: false
            };
            setTodos(prevTodos => [...prevTodos, newTodoItem]);
        }
        closeModal();
    };

    const handleDeleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const handleToggleComplete = (id) => {
        setTodos(prevTodos => 
            prevTodos.map(todo => 
                todo.id === id 
                    ? { ...todo, completed: !todo.completed } 
                    : todo
            )
        );
    };

    const openModal = (todo = null) => {
        setCurrentTodo(todo);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setCurrentTodo(null);
        setIsModalOpen(false);
    };

    const filteredTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={`app ${darkMode ? 'dark' : ''}`}>
            <div className="todo-app">
                <Header 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    openModal={openModal}
                    darkMode={darkMode}
                    toggleDarkMode={() => setDarkMode(!darkMode)}
                />
                <TodoList
                    todos={filteredTodos}
                    onDelete={handleDeleteTodo}
                    onToggleComplete={handleToggleComplete}
                    onEdit={openModal}
                />
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSubmit={handleAddTodo}
                    currentTodo={currentTodo}
                />
            </div>
            <button className="floating-button" onClick={() => openModal()}>
                <FiPlus size={24} />
            </button>
        </div>
    );
};

export default TodoApp;