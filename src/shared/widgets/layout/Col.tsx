import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface ColProps {
  grow?: boolean
}

export const Col = (props: PropsWithChildren<ColProps> & React.ButtonHTMLAttributes<HTMLElement>) => {
  const {
    grow = false,
    className,
    ...rest
  } = props;

  return <div
    {...rest}
    className={clsx(
      className,
      { 'grow': grow },
    )}
  >
    {props.children}
  </div>
};
