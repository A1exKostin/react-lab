import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  // Используем useRef для хранения актуального значения текста, доступного везде
  const textRef = useRef('');

  function handleSend() {
    setTimeout(() => {
      // К моменту срабатывания таймера в textRef.current будет самое актуальное значение
      alert('Sending: ' + textRef.current);
    }, 3000);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newText = e.target.value;
    setText(newText);
    // Синхронизируем ref с текущим вводом
    textRef.current = newText;
  }

  return (
    <>
      <input
        value={text}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
