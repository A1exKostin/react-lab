import { useState, useEffect } from 'react';

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    // Подписываемся на событие перемещения только если движение разрешено
    if (canMove) {
      function handleMove(e: PointerEvent) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
      window.addEventListener('pointermove', handleMove);
      // Очищаем обработчик при изменении canMove или размонтировании
      return () => {
        window.removeEventListener('pointermove', handleMove);
      };
    }
  }, [canMove]); // Добавляем canMove в зависимости, чтобы эффект перезапускался при переключении чекбокса

  return (
    <>
      <label>
        <input type="checkbox"
          checked={canMove}
          onChange={e => setCanMove(e.target.checked)} 
        />
        The dot is allowed to move
      </label>
      <hr />
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
    </>
  );
}
