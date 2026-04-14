import { useState, useEffect } from 'react';
import { usePointerPosition } from './usePointerPosition.ts';

type Position = { x: number, y: number };

function useDelayedValue(value: Position, delay: number) {
  // Храним задержанное значение в состоянии
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    // Устанавливаем таймер для обновления значения через указанную задержку
    const timeoutId = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    // Очищаем таймер при изменении входящего значения или задержки
    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return delayedValue;
}

export default function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos1, 200); // Чтобы цепочка была логичной, точки должны следовать за основной
  const pos4 = useDelayedValue(pos1, 300);
  const pos5 = useDelayedValue(pos1, 400);

  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

function Dot(
  { position, opacity }:
    { position: Position, opacity: number }
) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}

