// Выводим важность элемента с помощью оператора &&.
// Явная проверка importance > 0 необходима, чтобы избежать ошибки вывода "0" на экран, так как в React числа (в отличие от булевых значений) рендерятся как текст.
function Item({ name, importance }: { name: string, importance: number }) {
  return (
    <li className="item">
      {name}{importance > 0 && <i> (Важность: {importance})</i>}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          importance={9}
          name="Space suit"
        />
        <Item
          importance={0}
          name="Helmet with a golden leaf"
        />
        <Item
          importance={6}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
