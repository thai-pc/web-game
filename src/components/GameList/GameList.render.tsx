import React, { ReactElement } from 'react';
import GameCard from '../GameCard';
import { Game } from '../../types';
import { List, ListItem } from './styles';
interface Props {
  err?: string;
  games: Game[];
}

const GameListRender = ({ err, games }: Props): ReactElement => {
  if (err) {
    return <p>Unable to fetch games</p>;
  }
  if (!games?.length) {
    return <p>No games available</p>;
  }
  return (
    <List>
      {games.map((game) => {
        return (
          <ListItem key={game.id}>
            <GameCard content={game} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default GameListRender;
