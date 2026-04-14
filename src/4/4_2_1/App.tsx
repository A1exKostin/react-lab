import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  // Используем useRef для доступа к DOM-узлу видео
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    // Управляем воспроизведением видео через DOM API
    if (nextIsPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video 
        width="250"
        ref={videoRef}
        // Синхронизируем состояние, если управление происходит через контекстное меню браузера
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
