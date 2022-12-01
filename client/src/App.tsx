import "./App.css";
// import Header from "./components/Header";
// import Login from "./components/Login";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Rooms from "./components/Rooms";
import styled from "styled-components";
//import { io } from "socket.io-client";
import { useEffect, useState, useContext } from "react";
import socketService from "./services/socketService";
import { JoinRoom } from "./components/JoinRom";
import GameContext, { IGameContextProps } from "./gameContext";
import gameContext from "./gameContext";

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
    const [roomName, setRoomName] = useState(false);

    const { setInRoom, isInRoom } = useContext(gameContext);

    const connectSocket = async () => {
        const socket = await socketService.connect("http://localhost:5000").catch((err) => {
            console.log("Error: ", err);
        });
    };

    useEffect(() => {
        connectSocket();
    }, []);

    const gameContextValue: IGameContextProps = {
        isInRoom,
        setInRoom,
    };

    return (
        <GameContext.Provider value={gameContextValue}>
            <AppContainer>
                <WelcomeText>Welcome to Tic-Tac-toe</WelcomeText>
                <MainContainer>
                    <JoinRoom />
                </MainContainer>
            </AppContainer>
        </GameContext.Provider>
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
