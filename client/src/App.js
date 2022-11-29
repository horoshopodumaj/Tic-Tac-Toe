import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rooms from "./components/Rooms";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/rooms" element={<Rooms />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
