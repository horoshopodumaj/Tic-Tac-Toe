import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import gameContext from "../gameContext";
import gameService from "../services/gameService";
import socketService from "../services/socketService";

const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Zen Tokyo Zoo", cursive;
    position: relative;
`;

const RowContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 10px;
`;

const Cell = styled.div`
    width: 13em;
    height: 13em;
    display: flex;
    align-items: center;
    margin-right: 10px;
    justify-content: center;
    border-radius: 20px;
    cursor: pointer;
    border-top: 3px solid #0e9113;
    border-left: 3px solid #0e9113;
    border-bottom: 3px solid #0e9113;
    border-right: 3px solid #0e9113;
    transition: all 270ms ease-in-out;
    &:hover {
        background-color: #0e911328;
    }
`;

const PlayStopper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
    cursor: default;
`;

const X = styled.span`
    font-size: 80px;
    color: #1976d2;
    &::after {
        content: "X";
    }
`;

const O = styled.span`
    font-size: 80px;
    color: #1976d2;
    &::after {
        content: "O";
    }
`;

export type IPlayMatrix = Array<Array<string | null>>;
export interface IStartGame {
    start: boolean;
    symbol: "x" | "o";
}

export function Game() {
    const [matrix, setMatrix] = useState<IPlayMatrix>([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    const {
        playerSymbol,
        setPlayerSymbol,
        isPlayerTurn,
        setPlayerTurn,
        setGameStarted,
        isGameSaterted,
    } = useContext(gameContext);

    const checkGameState = (matrix: IPlayMatrix) => {
        for (let i = 0; i < matrix.length; i++) {
            let row = [];
            for (let j = 0; j < matrix[i].length; j++) {
                row.push(matrix[i][j]);
            }

            if (row.every((value) => value && value === playerSymbol)) {
                return [true, false];
            } else if (row.every((value) => value && value !== playerSymbol)) {
                return [false, true];
            }
        }

        for (let i = 0; i < matrix.length; i++) {
            let column = [];
            for (let j = 0; j < matrix[i].length; j++) {
                column.push(matrix[j][i]);
            }

            if (column.every((value) => value && value === playerSymbol)) {
                return [true, false];
            } else if (column.every((value) => value && value !== playerSymbol)) {
                return [false, true];
            }
        }

        if (matrix[1][1]) {
            if (matrix[0][0] === matrix[1][1] && matrix[2][2] === matrix[1][1]) {
                if (matrix[1][1] === playerSymbol) return [true, false];
                else return [false, true];
            }

            if (matrix[2][0] === matrix[1][1] && matrix[0][2] === matrix[1][1]) {
                if (matrix[1][1] === playerSymbol) return [true, false];
                else return [false, true];
            }
        }

        if (matrix.every((m) => m.every((v) => v !== null))) {
            return [true, true];
        }

        return [false, false];
    };

    const updateGameMatrix = (column: number, row: number, symbol: "x" | "o") => {
        const newMatrix = [...matrix];

        if (newMatrix[row][column] === null || newMatrix[row][column] === "null") {
            newMatrix[row][column] = symbol;
            setMatrix(newMatrix);
        }
        if (socketService.socket) {
            gameService.updateGame(socketService.socket, newMatrix);
            setPlayerTurn(false);
        }
    };

    const handleGameUpdate = () => {
        if (socketService.socket)
            gameService.onGameUpdate(socketService.socket, (newMatrix) => {
                setMatrix(newMatrix);
                setPlayerTurn(true);
            });
    };

    const handleGameStart = () => {
        if (socketService.socket)
            gameService.onStartGame(socketService.socket, (options) => {
                setGameStarted(true);
                setPlayerSymbol(options.symbol);
                if (options.start) setPlayerTurn(true);
                else setPlayerTurn(false);
            });
    };

    useEffect(() => {
        handleGameUpdate();
        handleGameStart();
    }, []);

    useEffect(() => {
        checkGameState(matrix);
    }, [matrix]);

    return (
        <GameContainer>
            {!isGameSaterted && <h2>Wait for the opponent to start the game!</h2>}
            {(!isGameSaterted || !isPlayerTurn) && <PlayStopper />}
            {matrix.map((row, rowIndex) => {
                return (
                    <RowContainer key={rowIndex}>
                        {row.map((column, columnIndex) => (
                            <Cell
                                key={columnIndex}
                                onClick={() =>
                                    updateGameMatrix(columnIndex, rowIndex, playerSymbol)
                                }>
                                {column && column !== "null" ? (
                                    column === "x" ? (
                                        <X />
                                    ) : (
                                        <O />
                                    )
                                ) : null}
                            </Cell>
                        ))}
                    </RowContainer>
                );
            })}
        </GameContainer>
    );
}
