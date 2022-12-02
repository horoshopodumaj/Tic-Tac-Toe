import { createContext } from "react";

export interface IGameContextProps {
    isInRoom: boolean;
    setInRoom: (inRoom: boolean) => void;
    playerSymbol: "x" | "o";
    setPlayerSymbol: (symbol: "x" | "o") => void;
    isPlayerTurn: boolean;
    setPlayerTurn: (turn: boolean) => void;
}

const defaultState: IGameContextProps = {
    isInRoom: false,
    setInRoom: () => {},
    playerSymbol: "x",
    setPlayerSymbol: () => {},
    isPlayerTurn: false,
    setPlayerTurn: () => {},
};

export default createContext(defaultState);
