import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
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
    @media screen and (max-width: 545px) {
        padding: 0 10px;
    }
`;

const WelcomeText = styled.h1`
    margin: 0;
    color: #1976d2;
    text-align: center;
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
    const [isGameStarted, setGameStarted] = useState(false);

    const connectSocket = async () => {
        const socket = await socketService
            .connect("https://tic-tac-toe-socket.onrender.com")
            .catch((err) => {
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
        isGameStarted,
        setGameStarted,
    };

    return (
        <GameContext.Provider value={gameContextValue}>
            <AppContainer>
                <WelcomeText>Welcome to Tic-Tac-Toe</WelcomeText>
                <MainContainer>
                    {!isInRoom && <JoinRoom />}
                    {isInRoom && <Game />}
                </MainContainer>
            </AppContainer>
        </GameContext.Provider>
    );
}

export default App;
