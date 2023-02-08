import { PropsWithChildren } from 'react';
import { CardBody } from './CardBody';
import { CardTitle } from './CardTitle';

function Card(props: PropsWithChildren) {
  return <div>
    {props.children}
  </div>
}

Card.CardTitle = CardTitle;
Card.CardBody = CardBody;

export default Card;
