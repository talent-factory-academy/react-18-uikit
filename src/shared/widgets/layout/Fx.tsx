import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface FxProps {
  justify?: 'justify-start' | 'justify-end' | 'justify-center' | 'justify-between' | 'justify-around' | 'justify-evenly';
  valign?: 'items-start' |'items-end' |'items-center' |'items-baseline' |'items-stretch';
  gap?: number;
}

export const Fx = (props: PropsWithChildren<FxProps>) => {
  const {
    justify = 'justify-start',
    gap = 0,
    valign = 'items-center'
  } = props;
  return <div
    className={clsx(
        'flex',
        justify,
        valign
      )}
    style={{ gap }}
  >
    {props.children}
  </div>
};
