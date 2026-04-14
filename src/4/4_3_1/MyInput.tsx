import { useEffect, useRef } from 'react';

export default function MyInput(
    {
        value,
        onChange
    }: {
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }) {

    const ref = useRef<HTMLInputElement>(null);

    // Используем useEffect для выполнения кода при монтировании компонента
    useEffect(() => {
        // Устанавливаем фокус на input после того, как он появился в DOM
        ref.current?.focus();
    }, []); // Пустой массив зависимостей гарантирует выполнение только при первом рендере

    return (
        <input
            ref={ref}
            value={value}
            onChange={onChange}
        />
    );
}