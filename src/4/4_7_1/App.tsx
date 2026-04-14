import { useState, useEffect } from 'react';

export default function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('✅ Creating an interval');
        const id = setInterval(() => {
            console.log('⏰ Interval tick');
            // Используем функциональное обновление, чтобы не зависеть от внешней переменной count
            setCount(c => c + 1);
        }, 1000);
        
        return () => {
            console.log('❌ Clearing an interval');
            clearInterval(id);
        };
    }, []); // Пустой массив зависимостей: интервал создается только при монтировании

    return <h1>Counter: {count}</h1>;
}