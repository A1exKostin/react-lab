import { useEffect } from 'react';
import { Connection } from './chat';

export default function ChatRoom({ roomId, createConnection }: {
    roomId: string; createConnection: (roomId: string) => Connection;
}) {
    useEffect(() => {
        // Создаем подключение, используя переданную функцию (которая может меняться)
        const connection = createConnection(roomId);
        connection.connect();
        // Очищаем подключение при смене параметров или размонтировании
        return () => connection.disconnect();
    }, [roomId, createConnection]); // Добавляем createConnection в зависимости

    return <h1>Welcome to the {roomId} room!</h1>;
}
