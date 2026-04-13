import { useState } from 'react';

// Если использовать переменные состояния напрямую (setPending(pending + 1)),
// из-за замыкания внутри асинхронной функции handleClick () используются "старые значения pending и completed, которые были на момент вызова функции (до delay).
// Чтобы состояние обновлялось стабильно, используется функция для обновления, которая гарантированно получает самое актуальное текущее значение (p => p + 1).
export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        setPending(p => p + 1);
        await delay(3000);
        setPending(p => p - 1);
        setCompleted(c => c + 1);
    }

    return (
        <>
            <h3>Отложенные: {pending}</h3>
            <h3>Выполненные: {completed}</h3>
            <button onClick={handleClick}>Купить</button>
        </>
    );
}

function delay(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}