/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import DiamondOutlined from '../SetFigures/DiamondOutlined';
import DiamondSolid from '../SetFigures/DiamondSolid';
import DiamondStriped from '../SetFigures/DiamondStriped';
import OvalOutlined from '../SetFigures/OvalOutlined';
import OvalSolid from '../SetFigures/OvalSolid';
import OvalStriped from '../SetFigures/OvalStriped';
import SquiggleOutlined from '../SetFigures/SquiggleOutlined';
import SquiggleSolid from '../SetFigures/SquiggleSolid';
import SquiggleStriped from '../SetFigures/SquiggleStriped';

import './styles.scss';

type Props = {
  color: 1 | 2 | 3;
  shape: 1 | 2 | 3;
  texture: 1 | 2 | 3;
  quantity: 1 | 2 | 3;
};

const components = {
  '11': OvalSolid,
  '12': OvalOutlined,
  '13': OvalStriped,
  '21': DiamondSolid,
  '22': DiamondOutlined,
  '23': DiamondStriped,
  '31': SquiggleSolid,
  '32': SquiggleOutlined,
  '33': SquiggleStriped,
} as const;

const colors = {
  1: '#f93b41',
  2: '#46914A',
  3: '#A033CD',
} as const;

const Card = ({ color, shape, texture, quantity }: Props) => {
  const stringColor = colors[color];
  const ComponentToRender = components[`${shape}${texture}` as const];

  return (
    <div className="card" onClick={(e) => console.log(e)}>
      <ComponentToRender color={stringColor} quantity={quantity} />
    </div>
  );
};

export default Card;
