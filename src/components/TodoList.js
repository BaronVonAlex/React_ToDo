import React from 'react';
import '../styles/TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onToggleComplete, onEdit }) => {
    return (
        <div className="todo-list">
            {todos.length === 0 ? (
                <p className="no-todos">No todos found!</p>
            ) : (
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        onToggleComplete={onToggleComplete}
                        onEdit={onEdit}
                    />
                ))
            )}
        </div>
    );
};

export default TodoList;
