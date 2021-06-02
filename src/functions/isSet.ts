import type { DeckObject, SetTuple } from '../types/types';

function areAllEqual([prop1, prop2, prop3]: (1 | 2 | 3)[]) {
  if (prop1 === prop2 && prop1 === prop3 && prop3 === prop2) {
    return true;
  }
  return false;
}

function areAllDifferent([prop1, prop2, prop3]: (1 | 2 | 3)[]) {
  if (prop1 !== prop2 && prop1 !== prop3 && prop3 !== prop2) {
    return true;
  }
  return false;
}

export default function isSet([object1, object2, object3]: SetTuple) {
  const colors = [object1.color, object2.color, object3.color];
  const shapes = [object1.shape, object2.shape, object3.shape];
  const textures = [object1.texture, object2.texture, object3.texture];
  const quantity = [object1.quantity, object2.quantity, object3.quantity];

  const isColorValid = areAllDifferent(colors) || areAllEqual(colors);
  const isShapeValid = areAllDifferent(shapes) || areAllEqual(shapes);
  const isTextureValid = areAllDifferent(textures) || areAllEqual(textures);
  const isQuantityValid = areAllDifferent(quantity) || areAllEqual(quantity);

  if (isColorValid && isShapeValid && isTextureValid && isQuantityValid) {
    return true;
  }

  return false;
}

export function checkBufferSelectedCards(
  i1: number,
  i2: number,
  i3: number,
  shownCards: DeckObject[]
) {
  const card1 = shownCards[i1];
  const card2 = shownCards[i2];
  const card3 = shownCards[i3];

  const isASet = isSet(card1, card2, card3);

  if (!isASet) {
    return false;
  }
  return true;
}
