import { useState } from 'react';

// Использование обычных переменных (let firstName) не заставляло React 
// перерисовывать компонент после их изменения. Для сохранения введенных значений и рендера нового состояния, они заменены на хуки useState.
export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value);
    }

    function handleReset() {
        setFirstName('');
        setLastName('');
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>
                Hi, {firstName} {lastName}
            </h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
}