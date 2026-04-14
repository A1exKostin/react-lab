import { useCounter } from './useCounter';

export default function Counter() {
  // Используем вынесенную логику через пользовательский хук
  const count = useCounter();
  
  return <h1>Seconds passed: {count}</h1>;
}
