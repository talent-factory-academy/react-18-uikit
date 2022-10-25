import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import css from './Tooltip.module.css';

// PLAIN JS VERSION: https://stackblitz.com/edit/js-khfcfb?file=index.html,style.css,index.js
import { computePosition, autoUpdate, flip } from '@floating-ui/dom';

interface ToolTipProps {
  text: React.ReactNode;
}
const ToolTip = React.memo((props: PropsWithChildren<ToolTipProps>) => {
  const [show, setShow] = useState(false)
  const target = useRef<HTMLElement | null>(null)
  const tooltip = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    return autoUpdate(target.current!, tooltip.current!, () => {
      computePosition(
        target.current!,
        tooltip.current!,
        { middleware: [flip()] }
      ).then(({x, y}) => {
        Object.assign(tooltip.current!.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    });
  }, []);

  return (
    <>
      <span
        ref={target}
        className={css.target}
        onMouseOver={() => setShow(true)}
        onMouseLeave={ () => setShow(false)}
      >{props.children}</span>
      <div ref={tooltip} className={css.tooltip} style={{ display: show ? 'inline-block' : 'none'}}>{props.text}</div>
    </>
  )
})

export default ToolTip;
