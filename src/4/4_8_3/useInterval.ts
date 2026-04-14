import { useEffect } from 'react';

// Общий хук для работы с интервалами
export function useInterval(onTick: () => void, delay: number) {
  useEffect(() => {
    const id = setInterval(onTick, delay);
    return () => clearInterval(id);
  }, [onTick, delay]);
}