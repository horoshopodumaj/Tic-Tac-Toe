import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rooms from "./components/Rooms";
import styled from "styled-components";
import { io } from "socket.io-client";
import { useEffect } from "react";

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WelcomeText = styled.h1`
    margin: 0;
    color: #1976d2;
`;

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <AppContainer>
            <WelcomeText>Welcome to Tic-Tac-toe</WelcomeText>
            <MainContainer>Hey!</MainContainer>
        </AppContainer>
    );
}

{
    /* <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/rooms" element={<Rooms />} />
                </Routes>
            </BrowserRouter> */
}

export default App;
