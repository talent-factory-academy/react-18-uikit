import React, { Children, PropsWithChildren, useState } from 'react';
import { AccordionGroup, AccordionGroupProps } from './AccordionGroup';

function Accordion(props: PropsWithChildren) {
  const [activeIndex, setActiveIndex] = useState(0)

  return <div>
    {
      Children.map(props.children, (child, index) => {
        const group = child as React.ReactElement<PropsWithChildren<AccordionGroupProps>>
        return React.cloneElement(
          group, {
            index,
            isOpen: activeIndex === index,
            onToggle: () => setActiveIndex(index)
          },
        )
      })
    }
  </div>
}



// expose Group but remove some props
/*
interface ConsumerAccordionGroup {
  (
    props: PropsWithChildren<Omit<AccordionGroupProps, 'index' | 'isOpen' | 'onToggle'>>
  ): JSX.Element;
}
*/
// or, better:

interface ConsumerAccordionGroup {
  (
    props: PropsWithChildren<Omit<AccordionGroupProps, 'index' | 'isOpen' | 'onToggle'>>
  ): ReturnType<typeof AccordionGroup>;
}
Accordion.Group = AccordionGroup as ConsumerAccordionGroup;
export default Accordion;
