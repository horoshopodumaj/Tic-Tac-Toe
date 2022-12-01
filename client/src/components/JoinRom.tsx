import React, { useState } from "react";
import styled from "styled-components";

interface IJoinRoomProps {}

const JoinRoomContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2em;
`;

const RoomIdInput = styled.input`
    height: 30px;
    width: 20em;
    font-size: 17px;
    outline: none;
    border: 1px solid #1976d2;
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 1em;
`;

const JoinButton = styled.button`
    outline: none;
    background-color: #1976d2;
    color: #fff;
    font-size: 17px;
    border: 2px solid transparent;
    border-radius: 5px;
    padding: 4px 18px;
    transition: all 230ms ease-in-out;
    margin-top: 1em;
    cursor: pointer;
    &:hover {
        background-color: transparent;
        border: 2px solid #1976d2;
        color: #1976d2;
    }
`;

export function JoinRoom(props: IJoinRoomProps) {
    const [roomName, setRoomName] = useState("");

    const handleRoomName = (event: React.ChangeEvent<any>) => {
        setRoomName(event.target.value);
    };
    return (
        <form>
            <JoinRoomContainer>
                <h4>Enter Room ID to Join the Game</h4>
                <RoomIdInput placeholder="Room ID" value={roomName} onChange={handleRoomName} />
                <JoinButton type="submit">Join</JoinButton>
            </JoinRoomContainer>
        </form>
    );
}
