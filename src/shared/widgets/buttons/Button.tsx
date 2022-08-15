import { CSSProperties } from 'react';

interface ButtonProps {
  label?: string;
  url?: string;
  style?: CSSProperties
}

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  const { children, ...rest} = props;

  function onClickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    if (props.url) {
      window.open(props.url)
    }
    // re-emit React event
    if (props.onClick) {
      props.onClick(e)
    }
  }

  return (<button
    className={`bg-slate-300 rounded border-none p-2 hover:opacity-50 transition`}
    {...rest}
    onClick={onClickHandler}
  >
    {props.label || props.children}
  </button>)
}

export default Button;
