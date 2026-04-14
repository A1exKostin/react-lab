import { useState, useEffect } from 'react';
import { fetchBio } from './api.ts';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState<string | null> (null);

  useEffect(() => {
    // Флаг для игнорирования результата устаревшего запроса
    let ignore = false;
    
    setBio(null);
    fetchBio(person).then(result => {
      // Обновляем стейт только если этот запрос все еще актуален
      if (!ignore) {
        setBio(result);
      }
    });

    // Функция очистки устанавливает флаг ignore в true при смене person или размонтировании
    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </>
  );
}
