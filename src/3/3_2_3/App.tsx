import { useState } from 'react';
import { initialLetters, LetterType } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
    const [letters, setLetters] = useState(initialLetters);
    // Ошибка была в хранении объекта целиком. При обновлении
    // создается новый объект, и старая ссылка в стейте перестает совпадать с новой.
    // Решение: хранить уникальный ID вместо ссылки на объект.
    const [highlightedId, setHighlightedId] = useState<number | null>(null);

    function handleHover(letter: LetterType) {
        setHighlightedId(letter.id);
    }

    function handleStar(starred: LetterType) {
        setLetters(letters.map(letter => {
            if (letter.id === starred.id) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                };
            } else {
                return letter;
            }
        }));
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isHighlighted={
                            letter.id === highlightedId
                        }
                        onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </>
    );
}

