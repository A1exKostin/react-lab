import { useEffect, useRef } from 'react';

export default function MyInput(
  {
    shouldFocus,
    value,
    onChange
  }: {
    shouldFocus: boolean,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Вызываем фокус только если передан пропс shouldFocus со значением true
    if (shouldFocus) {
      ref.current?.focus();
    }
  }, [shouldFocus]); // Добавляем shouldFocus в зависимости

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}