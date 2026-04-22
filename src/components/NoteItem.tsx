import { useContext, useState } from "react";
import ThemeContext from "../ThemeContext";
import ConfirmModal from "./ConfirmModal";

function NoteItem({ note, deleteNote, editNote, togglePin }) {
    const { theme } = useContext(ThemeContext);

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(note.text);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleSave = () => {
        if (!editText.trim()) return;
        editNote(note.id, editText.trim());
        setIsEditing(false);
    };

    const formatDate = (dateString) => {
        if (!dateString) return null;
        try {
            return new Date(dateString).toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        } catch {
            return dateString;
        }
    };

    return (
        <div className={`note-item ${theme}`}>

            {isEditing ? (
                <div className="edit-container">

                    <textarea
                        className="edit-input"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />

                    <div className="edit-buttons">
                        <button
                            className="save-btn"
                            disabled={!editText.trim()}
                            onClick={handleSave}
                        >
                            Save
                        </button>

                        <button
                            className="cancel-btn"
                            onClick={() => {
                                setEditText(note.text)      // ← اصلاح مهم
                                setIsEditing(false)
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="note-content">
                        <p className="note-text">
                            {note.text}
                        </p>

                        <span className="note-date">
                            {note.date
                                ? formatDate(note.date)
                                : formatDate(note.createdAt)}
                        </span>
                    </div>

                    <div className="note-actions">

                        <button
                            className={`pin-btn ${note.pinned ? "active" : ""}`}
                            onClick={() => togglePin(note.id)}
                        >
                            {note.pinned ? "📌" : "📍"}
                        </button>

                        <button
                            className="edit-btn"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>

                        <button
                            className="delete-btn"
                            onClick={() => setShowDeleteModal(true)}
                        >
                            Delete
                        </button>
                    </div>

                    {showDeleteModal && (
                        <ConfirmModal
                            onConfirm={() => {
                                deleteNote(note.id);
                                setShowDeleteModal(false);
                            }}
                            onCancel={() => setShowDeleteModal(false)}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default NoteItem;
