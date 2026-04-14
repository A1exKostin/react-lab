import { useState, useMemo } from 'react';
import ChatRoom from './ChatRoom.tsx';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState('general');
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  // Используем useMemo, чтобы объект options сохранял ссылку между рендерами.
  // Чат будет переподключаться только при изменении serverUrl или roomId.
  // Переключение темы (isDark) больше не вызывает переподключение.
  const options = useMemo(() => {
    return {
      serverUrl: serverUrl,
      roomId: roomId
    };
  }, [serverUrl, roomId]);

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <button onClick={() => setIsDark(!isDark)}>
        Toggle theme
      </button>
      <br />
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom options={options} />
    </div>
  );
}
