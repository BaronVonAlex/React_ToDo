import React from 'react';
import '../styles/TodoItem.css';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const TodoItem = ({ todo, onDelete, onToggleComplete, onEdit }) => {
    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(todo.id);
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        onEdit(todo);
    };

    return (
        <div 
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            onClick={() => onToggleComplete(todo.id)}
        >
            <div className="todo-text">
                {todo.text}
            </div>
            <div className="todo-actions">
                <button 
                    className="edit-button" 
                    onClick={handleEdit}
                >
                    <FiEdit />
                </button>
                <button 
                    className="delete-button" 
                    onClick={handleDelete}
                >
                    <FiTrash2 />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;