import { useState } from 'react';
import { ContactType } from './App';

export default function EditContact(
  { savedContact, onSave }:
    { savedContact: ContactType, onSave: (updatedData: ContactType) => void }
) {
  // Состояние инициализируется значениями из пропса при монтировании.
  // Благодаря использованию key в родительском компоненте, EditContact будет
  // пересоздаваться при смене контакта, сбрасывая состояние автоматически.
  const [name, setName] = useState(savedContact.name);
  const [email, setEmail] = useState(savedContact.email);

  return (
    <section>
      <label>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{' '}
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <button onClick={() => {
        const updatedData = {
          id: savedContact.id,
          name: name,
          email: email
        };
        onSave(updatedData);
      }}>
        Save
      </button>
      <button onClick={() => {
        // Локальный сброс к текущим сохраненным значениям
        setName(savedContact.name);
        setEmail(savedContact.email);
      }}>
        Reset
      </button>
    </section>
  );
}