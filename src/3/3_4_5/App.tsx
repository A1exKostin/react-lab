import { useState } from 'react';
import Contact from './Contact';

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={e => {
            setReverse(e.target.checked)
          }}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact) =>
          // Ошибка была в использовании индекса массива (i) в качестве ключа.
          // При изменении порядка (reverse) состояние оставалось привязанным к индексу.
          // Решение: использовать уникальный id контакта.
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        )}
      </ul>
    </>
  );
}

export type ContactType = {
  id: number;
  name: string;
  email: string;
}

const contacts: ContactType[] = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];
