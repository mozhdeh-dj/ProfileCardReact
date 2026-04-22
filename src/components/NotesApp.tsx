import { useContext, useEffect, useState } from "react"
import NoteList from "./NoteList.tsx"
import NoteForm from "./NoteForm.tsx"
import ThemeContext from "../ThemeContext"

function NotesApp() {
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem("notes")
        return saved ? JSON.parse(saved) : []
    })
    const [search, setSearch] = useState('')

    const { theme, toggleTheme } = useContext(ThemeContext)

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const addNote = ({ text, date }) => {
        const newNote = {
            id: Date.now(),
            text,
            createdAt: new Date().toISOString(),
            date: date || null,
            pinned: false
        }

        setNotes(prev => [...prev, newNote])

    }


    const editNote = (id, newText) => {
        setNotes(notes.map(note => note.id === id ? { ...note, text: newText } : note))
    }


    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    const filteredNotes = notes.filter(note => note.text.toLowerCase().includes(search.toLowerCase()))

    const togglePin = (id) => {
        setNotes(notes.map(note => note.id === id ? { ...note, pinned: !note.pinned } : note))
    }

    const sortedNotes = [...filteredNotes].sort((a, b) => {
        if (a.pinned === b.pinned) return 0
        return a.pinned ? -1 : 1
    })

    return (
        <div className={`notes-app ${theme}`}>
            <button className="theme-btn" onClick={toggleTheme}>
                {theme === "light" ? (
                    // Moon icon
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M21 12.79A9 9 0 0111.21 3 7 7 0 1019 14.79 8.93 8.93 0 0121 12.79z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ) : (
                    // Sun icon
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="5"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <path
                            d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                )}
            </button>


            <h1>Notes App</h1>

            <input
                className="search-input"
                type="text"
                placeholder="Search notes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <NoteForm addNote={addNote} />

            <NoteList
                notes={sortedNotes}
                deleteNote={deleteNote}
                editNote={editNote}
                togglePin={togglePin}
            />
        </div>
    )
}

export default NotesApp