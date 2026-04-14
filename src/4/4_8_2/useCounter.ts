import { useState, useEffect } from 'react';

// Принимаем delay как аргумент
export function useCounter(delay: number) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, delay); // Используем переданную задержку
    return () => clearInterval(id);
  }, [delay]); // Пересоздаем интервал при изменении delay
  return count;
}
