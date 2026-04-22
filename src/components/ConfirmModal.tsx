function ConfirmModal({ onConfirm, onCancel }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Delete note?</h3>
                <p>Are you sure you want to delete this note?</p>

                <div className="modal-actions">
                    <button className="cancel-btn" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="delete-btn" onClick={onConfirm}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal
