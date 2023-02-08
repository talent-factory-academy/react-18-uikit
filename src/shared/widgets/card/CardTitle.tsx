import { PropsWithChildren } from 'react';

export function CardTitle(props: PropsWithChildren) {
  return <div  className=" bg-slate-500 text-white p-3">
    {props.children}
  </div>
}
