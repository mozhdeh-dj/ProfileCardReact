import { useContext, useState } from "react";
import ThemeContext from "../ThemeContext";

function NoteForm({ addNote }) {
    const [text, setText] = useState('')
    const { theme } = useContext(ThemeContext)
    const [date, setDate] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!text.trim()) return

        addNote({ text, date: date || null });

        setText('')
        setDate('')
    }

    return (
        <form onSubmit={handleSubmit} className={`note-form ${theme}`}>

            <input
                type="text"
                placeholder="Write a note..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <input
                type="date"
                value={date}
                
                onChange={(e) => setDate(e.target.value)}
            />

            <button type={"submit"}>Add</button>

        </form>
    );
}

export default NoteForm