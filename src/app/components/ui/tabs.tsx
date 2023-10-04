import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import * as RadixTabs from '@radix-ui/react-tabs';
import { PandaCSS } from '../../pandaCSS'

export interface ItemTabProps {
  title: string
  content: ReactNode
}

export interface TabsProps extends RadixTabs.TabsProps {
  items: ItemTabProps[]
}

const Tabs = ({ items, defaultValue = '0' }: TabsProps) => {
  const [tabActive, setTabActive] = useState(defaultValue)

  return (
    <RadixTabs.Root 
      className={PandaCSS.Tabs.cssTabsRoot} 
      defaultValue={`tab${defaultValue}`}
    >
      <RadixTabs.List className={PandaCSS.Tabs.cssTabsList} aria-label="Manage your account">
        {
          items.map(({ title }: ItemTabProps, index) => {

            const classNameActive = classNames(
              tabActive === String(index) ? PandaCSS.Tabs.cssTabActiveStyle : ''
            )

            return (
              <RadixTabs.Trigger 
                key={index} 
                className={classNames(PandaCSS.Tabs.cssTabsTrigger, classNameActive)} 
                value={`tab${index}`}
                onClick={() => setTabActive(String(index))}
              >
                {title}
              </RadixTabs.Trigger>
            )
           }
          )
        }
      </RadixTabs.List>
      {items.map(({ content }: ItemTabProps, index) => (
        <RadixTabs.Content 
          key={index} 
          className={PandaCSS.Tabs.cssTabsContent} 
          value={`tab${index}`}
        >
          {content}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  )
}


export { Tabs }