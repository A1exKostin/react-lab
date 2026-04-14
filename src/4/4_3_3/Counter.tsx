import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }

    // Сохраняем ID интервала
    const intervalId = setInterval(onTick, 1000);

    // Возвращаем функцию очистки, которая сработает при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []); // Пустой массив, интервал создается только один раз при монтировании

  return <h1>{count}</h1>;
}
