const person = {
  name: 'Gregorio Y. Zara',
  imageUrl: 'GregorioYZara.jpg',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};
  
// Свойство imageUrl добавлено в объект person и используется в свойстве src картинки.
export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.imageUrl}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
  