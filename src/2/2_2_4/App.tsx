// Переменная состояния (useState) здесь была излишней. Обновление состояния в React происходит асинхронно, поэтому alert показывал старое пустое значение name.
// Кроме того, само значение name нужно только для выполнения alert и не используется для отображения в JSX, поэтому сохранять его в state (вызывая рендер) нет смысла.
export default function FeedbackForm() {
    function handleClick() {
        const name = prompt('What is your name?') ?? "";
        alert(`Hello, ${name}!`);
    }

    return <button onClick={handleClick}>Greet</button>;
}
