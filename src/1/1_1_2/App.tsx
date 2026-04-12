// Ошибка была в том, что после return на той же строке ничего не было (возвращался undefined из-за ASI).
// Исправлено добавлением круглых скобок для безопасного переноса JSX на следующие строки.
export default function Profile() {
    return (
        <img src="KatsukoSaruhashi.jpg" alt="Katsuko Saruhashi" />
    );
}