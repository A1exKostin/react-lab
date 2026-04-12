// React отличает компоненты от обычных HTML-тегов по заглавной первой букве.
// Функция компонента теперь называется 'Profile' с заглавной 'P', а также обновлены еë вызовы.
function Profile() {
    return (
      <img
        src="AlanHart.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  