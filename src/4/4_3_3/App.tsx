import { useState } from 'react';
import Counter from './Counter.tsx';

export default function Form() {
  // Управление видимостью счетчика
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} counter</button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
}