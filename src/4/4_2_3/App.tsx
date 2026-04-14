import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  // Используем Map для хранения ссылок на все элементы списка
  const itemsRef = useRef<Map<number, HTMLImageElement>>(null);

  function getMap() {
    if (!itemsRef.current) {
      // Инициализируем Map при первом обращении
      (itemsRef as any).current = new Map();
    }
    return itemsRef.current!;
  }

  function handleNext() {
    const nextIndex = (index < catList.length - 1) ? index + 1 : 0;
    
    // flushSync заставляет React обновить DOM немедленно
    flushSync(() => {
      setIndex(nextIndex);
    });

    // Теперь, когда DOM обновлен, мы можем прокрутить к активному элементу
    const node = getMap().get(nextIndex);
    node?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <>
      <nav>
        <button onClick={handleNext}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                className={index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
                // Сохраняем ссылку на элемент в Map
                ref={(node) => {
                  const map = getMap();
                  if (node) {
                    map.set(i, node);
                  } else {
                    map.delete(i);
                  }
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

type PlaceType = {
  id: number;
  imageUrl: string;
}

const catList: PlaceType[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `https://loremflickr.com/250/200/cat?lock=${i}` // Используем реальные изображения для наглядности
  });
}

