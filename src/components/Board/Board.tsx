/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from '../Card/Card';
import { CardObject } from '../../types/types';

import './styles.scss';

type Props = {
  boardCards: CardObject[];
  toggleBuffer: (i: number) => void;
};

const Board = ({ boardCards, toggleBuffer }: Props) => {
  const cards = boardCards.map((card, i) => (
    <Card
      card={card}
      index={i}
      toggleBuffer={toggleBuffer}
      key={`${card.color}-${card.quantity}-${card.shape}-${card.texture}`}
    />
  ));
  return (
    <div className="board" role="main">
      {cards}
    </div>
  );
};

export default Board;
