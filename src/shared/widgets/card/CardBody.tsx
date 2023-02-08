import { PropsWithChildren } from 'react';

export function CardBody(props: PropsWithChildren) {
  return <div className="border border-slate-500 p-3">
    {props.children}
  </div>
}
