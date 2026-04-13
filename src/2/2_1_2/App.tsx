import { useState } from "react";

function ColorSwitch({
  onChangeColor
}: {
  onChangeColor: () => void
}) {
  // Обработчик onClick вызывает переданную из свойств функцию onChangeColor.
  // Метод e.stopPropagation() предотвращает всплытие (bubbling) события к родительскому элементу <div>, поэтому счетчик кликов на странице не будет увеличиваться при нажатии на кнопку.
  return (
    <button onClick={(e) => {
      e.stopPropagation();
      onChangeColor();
    }}>
      Change color
    </button>
  );
}

export default function App() {
  const [clicks, setClicks] = useState(0)

  function handleClickOutside() {
    setClicks(c => c + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  return (
    <div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
      <ColorSwitch onChangeColor={handleChangeColor} />
      <br />
      <br />
      <h2>Clicks on the page: {clicks}</h2>
    </div>
  );
}