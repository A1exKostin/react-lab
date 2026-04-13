// Ошибка была в том, что Form рендерился на разных позициях в дереве 
// в зависимости от условия. При переключении React считал, что это новый 
// компонент, и сбрасывал его стейт. 
// Решение: использовать единую структуру рендеринга.
import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      {showHint && (
        <p><i>Hint: Your favorite city?</i></p>
      )}
      <Form />
      {showHint ? (
        <button onClick={() => setShowHint(false)}>
          Hide hint
        </button>
      ) : (
        <button onClick={() => setShowHint(true)}>
          Show hint
        </button>
      )}
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}

