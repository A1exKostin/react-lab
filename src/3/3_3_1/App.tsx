import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  return (
    <>
      <Input 
        label="First input" 
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Input 
        label="Second input" 
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </>
  );
}

function Input({ 
  label, 
  value, 
  onChange 
}: { 
  label: string, 
  value: string, 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
}) {
  // Состояние было поднято в родительский компонент SyncedInputs для синхронизации.
  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

