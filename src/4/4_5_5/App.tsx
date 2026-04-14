import { useState, useEffect } from 'react';
import { fetchData, GeoObj } from './api';

export default function Page() {
  const [planetList, setPlanetList] = useState<GeoObj[]>([])
  const [planetId, setPlanetId] = useState<string>('');

  const [placeList, setPlaceList] = useState<GeoObj[]>([]);
  const [placeId, setPlaceId] = useState<string>('');

  // Загрузка списка планет при монтировании
  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then(result => {
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanetId(result[0].id); // Выбираем первую планету по умолчанию
      }
    });
    return () => {
      ignore = true;
    }
  }, []);

  // Загрузка списка мест при выборе или смене планеты
  useEffect(() => {
    if (planetId === '') {
      return;
    }

    let ignore = false;
    fetchData('/planets/' + planetId + '/places').then(result => {
      if (!ignore) {
        console.log('Fetched a list of places for ' + planetId + '.');
        setPlaceList(result);
        setPlaceId(result[0].id); // Выбираем первое место по умолчанию
      }
    });
    return () => {
      ignore = true;
    };
  }, [planetId]); // Эффект срабатывает при изменении planetId

  return (
    <>
      <label>
        Pick a planet:{' '}
        <select value={planetId} onChange={e => {
          setPlanetId(e.target.value);
        }}>
          {planetList.map(planet =>
            <option key={planet.id} value={planet.id}>{planet.name}</option>
          )}
        </select>
      </label>
      <label>
        Pick a place:{' '}
        <select value={placeId} onChange={e => {
          setPlaceId(e.target.value);
        }}>
          {placeList.map(place =>
            <option key={place.id} value={place.id}>{place.name}</option>
          )}
        </select>
      </label>
      <hr />
      <p>You are going to: {placeId || '???'} on {planetId || '???'} </p>
    </>
  );
}
