import { PropsWithChildren } from 'react';

export interface AccordionGroupProps {
  title: string;
  index?: number;
  isOpen?: boolean;
  onToggle?: () => void;
}


export function AccordionGroup(props: PropsWithChildren<AccordionGroupProps>) {
  return <div className="border border-slate-500">
    <div className="bg-slate-500 text-white" onClick={props.onToggle}>
      {props.title}
    </div>
    {
        props.isOpen && <div className="p-3">{props.children}</div>
    }
  </div>
}
