import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import '../styles/Modal.css';

ReactModal.setAppElement('#root');

const Modal = ({ isOpen, onClose, onSubmit, currentTodo }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        if (currentTodo) {
            setText(currentTodo.text);
        } else {
            setText('');
        }
    }, [currentTodo, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onSubmit(text);
            setText('');
        }
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="modal"
            overlayClassName="overlay"
        >
            <form onSubmit={handleSubmit}> {/* Wrap in form element */}
                <h2>{currentTodo ? 'Edit Todo' : 'Add Todo'}</h2>
                <input
                    type="text"
                    className="modal-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your todo..."
                    autoFocus
                />
                <div className="modal-actions">
                    <button type="submit" className="modal-button save">
                        Save
                    </button>
                    <button 
                        type="button" 
                        className="modal-button cancel" 
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </ReactModal>
    );
};

export default Modal;