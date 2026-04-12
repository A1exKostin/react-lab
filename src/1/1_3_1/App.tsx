// HTML конвертирован в JSX: добавлен пустой фрагмент для обертки возвращаемых элементов,
// атрибуты class заменены на className, теги br сделаны самозакрывающимися (<br />), а также исправлен порядок закрытия тегов (сначала </i>, потом </b>).
export default function Bio() {
  return (
    <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br /><br />
        <b>And <i>pictures</i></b> of scientists!
      </p>
    </>
  );
}