import { useState } from 'react';
import { useInterval } from './useInterval';

// useCounter теперь использует специализированный хук useInterval
export function useCounter(delay: number = 1000) {
  const [count, setCount] = useState(0);
  
  useInterval(() => {
    setCount(c => c + 1);
  }, delay);

  return count;
}
