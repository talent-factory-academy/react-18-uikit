import clsx from 'clsx';
import { CSSProperties, PropsWithChildren } from 'react';

export interface ButtonGroupProps {
  direction?: 'row' | 'col' | 'center';
  inline?: boolean;
  border?: boolean;
  style?: CSSProperties;
}

export const ButtonGroup = (props: PropsWithChildren<ButtonGroupProps>) => {
  const { style, border, inline = true, direction = 'row' } = props;
  return  <span
    style={{ ...style }}
    className={clsx(
      `flex items-center p-2    gap-2`,
      { 'border-2 rounded': border },
      { 'inline-flex': inline },
      { 'flex-row': direction === 'row' },
      { 'flex-col': direction === 'col' },
    )}>
    {props.children}
  </span>
};
