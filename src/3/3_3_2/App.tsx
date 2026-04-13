import { useState } from 'react';
import { foods, filterItems, Item } from './data';

export default function FilterableList() {
  const [query, setQuery] = useState('');

  // Фильтруем список на основе поискового запроса, во время рендера, чтобы список всегда был актуальным.
  const filteredItems = filterItems(foods, query);

  return (
    <>
      <SearchBar
        query={query}
        onChange={e => setQuery(e.target.value)}
      />
      <hr />
      <List items={filteredItems} />
    </>
  );
}

function SearchBar({
  query,
  onChange
}: {
  query: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }: { items: Item[] }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
