import { useState } from "react";
import styled from "styled-components";

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

    return (
        <GameContainer>
            {matrix.map((row, rowIndex) => {
                return (
                    <RowContainer>
                        {row.map((column, columnIndex) => (
                            <Cell>
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
