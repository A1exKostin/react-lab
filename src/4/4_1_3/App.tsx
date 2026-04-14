import { useRef } from 'react';

function DebouncedButton({ onClick, children }: {
  onClick: () => void, children: React.ReactNode
}) {
  // Используем useRef для хранения ID таймера для каждого экземпляра кнопки отдельно
  const timeoutRef = useRef<number | undefined>(undefined);

  return (
    <button onClick={() => {
      // Очищаем предыдущий таймер конкретно для этой кнопки
      clearTimeout(timeoutRef.current);
      // Устанавливаем новый таймер и сохраняем его в ref.current
      timeoutRef.current = setTimeout(() => {
        onClick();
      }, 1000);
    }}>
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}
