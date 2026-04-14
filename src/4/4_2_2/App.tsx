import { useRef } from 'react';

export default function Page() {
  // Используем useRef для доступа к элементу ввода
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    // Устанавливаем фокус на поле ввода через DOM API
    inputRef.current?.focus();
  }

  return (
    <>
      <nav>
        <button onClick={handleClick}>Search</button>
      </nav>
      <input
        ref={inputRef}
        placeholder="Looking for something?"
      />
    </>
  );
}
