import { useState } from 'react';
import MyInput from './MyInput.tsx';

export default function Form() {
  // Состояние видимости формы
  const [show, setShow] = useState(false);
  // Состояние текста ввода
  const [name, setName] = useState('Taylor');
  // Состояние чекбокса для управления регистром
  const [upper, setUpper] = useState(false);
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} form</button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your name:
            <MyInput
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={upper}
              onChange={e => setUpper(e.target.checked)}
            />
            Make it uppercase
          </label>
          <p>Hello, <b>{upper ? name.toUpperCase() : name}</b></p>
        </>
      )}
    </>
  );
}
