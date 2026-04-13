import { useState } from 'react';

// Вызов alert можно ставить как до, так и после setWalk(!walk) — разницы не будет.
// В React переменные состояния (state) фиксированы для каждого рендера. Поэтому внутри функции handleClick значение переменной walk остается прежним до тех пор, пока не произойдет следующий рендер.
export default function TrafficLight() {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        if (walk) {
            alert("Stop is next");
        } else {
            alert("Walk is next");
        }
        setWalk(!walk);
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to {walk ? 'Stop' : 'Walk'}
            </button>
            <h1
                style={{
                    color: walk ? 'darkgreen' : 'darkred',
                }}
            >
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    );
}