export default function Clock(props: { time: string, color: string }) {
  // Ошибка: props.color использовался только для инициализации стейта.
  // При обновлении пропсов стейт сам не обновляется. Решение — использовать пропс напрямую.
  return (
    <h1 style={{ color: props.color }}>
      {props.time}
    </h1>
  );
}
