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
  color: number;
  shape: number;
  texture: number;
  quantity: number;
  isSelected: boolean;
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
  1: 'red',
  2: 'green',
  3: 'purple',
} as const;

const Card = ({ color, shape, texture, quantity, isSelected }: Props) => {
  const stringColor = colors[color];
  const ComponentToRender = components[`${shape}${texture}` as const];

  return (
    <div className="card">
      <ComponentToRender color={stringColor} quantity={quantity} />;
    </div>
  );
};

export default Card;
