import { people } from './data.js';
import { getImageUrl } from './utils.js';

export type Person = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

// Массив данных разделен на две категории ('chemist' и все остальные) с помощью метода filter.
// Для каждой категории сформирован свой массив элементов (JSX) и они выводятся под отдельными заголовками.
export default function List() {
    const chemists = people.filter((person: Person) => person.profession === 'chemist');
    const everyoneElse = people.filter((person: Person) => person.profession !== 'chemist');

    const chemistItems = chemists.map((person: Person) => (
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    ));

    const everyoneElseItems = everyoneElse.map((person: Person) => (
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    ));

    return (
        <article>
            <h1>Scientists</h1>
            <h2>Chemists</h2>
            <ul>{chemistItems}</ul>
            <h2>Everyone Else</h2>
            <ul>{everyoneElseItems}</ul>
        </article>
    );
}
