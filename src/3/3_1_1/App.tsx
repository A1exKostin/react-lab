import { useState } from 'react';

export default function Picture() {
    const [isActive, setIsActive] = useState(false);

    // При клике на фон активируем background--active и убираем picture--active
    function handleDivClick() {
        setIsActive(false);
    }

    // При клике на картинку деактивируем background--active и добавляем picture--active.
    // Останавливаем всплытие (stopPropagation), чтобы не сработал обработчик на div.
    function handleImgClick(e: React.MouseEvent) {
        e.stopPropagation();
        setIsActive(true);
    }

    return (
        <div 
            className={`background ${!isActive ? 'background--active' : ''}`}
            onClick={handleDivClick}
        >
            <img
                onClick={handleImgClick}
                className={`picture ${isActive ? 'picture--active' : ''}`}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="/5qwVYb1.jpg"
            />
        </div>
    );
}