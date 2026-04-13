import { Que } from "./App";

export function getFinalState(baseState: number, queue: Que[]) {
    let finalState = baseState;

    for (let update of queue) {
        if (typeof update === 'function') {
            // Если передан обновитель (функция), применяем его к текущему состоянию
            finalState = update(finalState);
        } else {
            // Если передано конкретное значение, оно просто заменяет состояние
            finalState = update;
        }
    }

    return finalState;
}