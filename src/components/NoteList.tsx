import NoteItem from "./NoteItem.tsx";

function NoteList({ notes, deleteNote, editNote,togglePin }) {
    return (
        <div className="notes-list">

            {notes.map(note => (
                <NoteItem
                    key={note.id}
                    note={note}
                    deleteNote={deleteNote}
                    editNote={editNote}
                    togglePin={togglePin}
                />
            ))}

        </div>
    );
}

export default NoteList;