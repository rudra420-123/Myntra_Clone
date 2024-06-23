import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Download from "./components/Download";

function App() {
    return ( <
        div className = "App" >
        <Navbar />
        <Hero />
        <Download />
        </div>
    );
}

export default App;