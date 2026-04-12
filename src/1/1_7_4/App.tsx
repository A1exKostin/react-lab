import { Fragment } from 'react';

const poem = {
  lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.',
  ],
};

// Для вывода разделителя <hr /> добавлен Fragment, принимающий key.
// Условие index < poem.lines.length - 1 гарантирует, что линия будет выведена только между элементами, но не в конце списка.
export default function Poem() {
  return (
      <article>
          {poem.lines.map((line, index) => (
              <Fragment key={index}>
                  <p>{line}</p>
                  {index < poem.lines.length - 1 && <hr />}
              </Fragment>
          ))}
      </article>
  );
}