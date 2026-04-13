// Обработчику onClick передается сама функция handleClick, а не результат ее вызова (handleClick()).
export default function LightSwitch() {
    function handleClick() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
        }
    }

    return (
        <button onClick={handleClick}>
            Toggle the lights
        </button>
    );
}