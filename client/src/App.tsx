import "./App.css";
// import Header from "./components/Header";
// import Login from "./components/Login";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Rooms from "./components/Rooms";
import styled from "styled-components";
//import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import socketService from "./services/socketService";
import { JoinRoom } from "./components/JoinRom";
import GameContext, { IGameContextProps } from "./gameContext";
import { Game } from "./components/game";

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
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
    const [isInRoom, setInRoom] = useState(false);
    const [playerSymbol, setPlayerSymbol] = useState<"x" | "o">("x");
    const [isPlayerTurn, setPlayerTurn] = useState(false);
    const [isGameSaterted, setGameStarted] = useState(false);

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
        playerSymbol,
        setPlayerSymbol,
        isPlayerTurn,
        setPlayerTurn,
        isGameSaterted,
        setGameStarted,
    };

    return (
        <GameContext.Provider value={gameContextValue}>
            <AppContainer>
                <WelcomeText>Welcome to Tic-Tac-toe</WelcomeText>
                <MainContainer>
                    {!isInRoom && <JoinRoom />}
                    {isInRoom && <Game />}
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
