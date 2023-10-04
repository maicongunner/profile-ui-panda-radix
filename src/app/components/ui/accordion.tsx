import React, { ReactNode, useState } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { PandaCSS } from '@/app/pandaCSS';

interface AccordionItem {
  title: string
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion = ({ items }: AccordionProps) => {
  const [itemsActive, setItemsActive] = useState<String[]>([])

  function handleChangeActiveAccordion(index: string) {
    if (itemsActive.includes(index)) {
      const newItemsActive = itemsActive.filter(item => item !== index)
      setItemsActive(newItemsActive)
      return 
    }

    setItemsActive([...itemsActive, index])
  }

  return (
    (
      <RadixAccordion.Root type="multiple">
        {items.map(({ title, content }: AccordionItem, index) => {
            return (
              <RadixAccordion.Item 
                key={index} 
                value={`item-${index}`}
                className={PandaCSS.Accordion.cssAccordionItem}
              >
                <RadixAccordion.Header>
                  <RadixAccordion.Trigger 
                    className={PandaCSS.Accordion.cssAccordionTrigger}
                    onClick={() => handleChangeActiveAccordion(String(index))}
                  >
                    <span>{title}</span>
                    <ChevronDownIcon 
                      className={itemsActive.includes(String(index)) ? PandaCSS.Accordion.cssAccordionChevronOpened : PandaCSS.Accordion.cssAccordionChevron}
                      aria-hidden 
                    />
                  </RadixAccordion.Trigger>
                </RadixAccordion.Header>
                <RadixAccordion.Content 
                  className={PandaCSS.Accordion.cssAccordionContent}
                >
                  {content}
                </RadixAccordion.Content>
              </RadixAccordion.Item>
            )
          })
        }
      </RadixAccordion.Root>
    )
  )
}

export { Accordion };