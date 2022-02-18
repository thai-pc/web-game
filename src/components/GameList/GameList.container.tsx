import React, {
  ChangeEvent,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import GameListRender from './GameList.render';
import { Game } from '../../types';
import { API_HOST, API_KEY } from './constants';
import { Filter } from './types';

const GameList = (): ReactElement => {
  const [filter, setFilter] = useState<Filter>({
    platform: 'browser',
    sortBy: 'relevance',
  });

  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>('');

  useEffect(() => {
    axios
      .get('/games', {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
        params: {
          platform: 'browser',
        },
      })
      .then((res) => setGames(res.data))
      .catch((err) => setErr(err.message));
  }, []);

  const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    setFilter((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    e.preventDefault();
  }, []);

  return (
    <GameListRender err={err} games={games} onFilterChange={onFilterChange} />
  );
};

export default GameList;
