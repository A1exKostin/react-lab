import { useState } from 'react';

export default function Toggle() {
  // Используем useState вместо useRef, чтобы изменение состояния вызывало перерисовку компонента
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => {
      // Обновляем состояние, что приведет к ререндеру
      setIsOn(!isOn);
    }}>
      {isOn ? 'Вкл' : 'Выкл'}
    </button>
  );
}