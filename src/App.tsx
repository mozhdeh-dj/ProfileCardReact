import NotesApp from "./components/NotesApp";
import "././components/style.css";
import ThemeProvider from "./ThemeProvider.tsx";

function App() {
    return (
        <div>
            <ThemeProvider>
                <NotesApp />
            </ThemeProvider>
        </div>
    );
}

export default App;
