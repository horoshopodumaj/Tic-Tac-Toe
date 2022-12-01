import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rooms from "./components/Rooms";
import styled from "styled-components";

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function App() {
    return (
        <AppContainer>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/rooms" element={<Rooms />} />
                </Routes>
            </BrowserRouter>
        </AppContainer>
    );
}

export default App;
