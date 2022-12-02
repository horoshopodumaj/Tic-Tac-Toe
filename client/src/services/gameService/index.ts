import { Socket } from "socket.io-client";
import { IPlayMatrix, IStartGame } from "../../components/game";

class GameService {
    public async joinGameRoom(socket: Socket, roomId: string): Promise<boolean> {
        return new Promise((res, rej) => {
            socket.emit("join_game", { roomId });
            socket.on("room_joined", () => res(true));
            socket.on("room_join_error", ({ error }) => rej(error));
        });
    }

    public async updateGame(socket: Socket, gameMatrix: IPlayMatrix) {
        socket.emit("update_game", { matrix: gameMatrix });
    }

    public async onGameUpdate(socket: Socket, listiner: (matrix: IPlayMatrix) => void) {
        socket.on("on_game_update", ({ matrix }) => listiner(matrix));
    }

    public async onStartGame(socket: Socket, listiner: (options: IStartGame) => void) {
        socket.on("start_game", listiner);
    }
}

export default new GameService();
