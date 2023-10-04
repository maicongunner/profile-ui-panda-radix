"use client"


import Link from 'next/link';
import { Avatar } from './ui/avatar';
import { Tabs } from './ui/tabs';
import { PandaCSS } from '../pandaCSS'
import { Accordion } from './ui/accordion';
import { Select } from './ui/select';
import { Form } from './ui/form';
import { Box } from './ui/box';
import { Switch } from './ui/switch';
import RadioGroup from './ui/radioGroup';
import { Button } from './ui/button';

export function Profile() {

  const linkItems = [
    {
      text: 'Development',
      url: ''
    },
    {
      text: 'Campinas',
      url: ''
    },
    {
      text: '3 Followers',
      url: '#'
    },
    {
      text: '11 Following',
      url: '#'
    },
    {
      text: '2 Groups',
      url: '#'
    }
  ]

  const accordionItems = [
    {
      title: 'Question one',
      content: <h2>Content question one</h2>
    },
    {
      title: 'Question two',
      content: <h2>Content question two</h2>
    },
    {
      title: 'Question three',
      content: <h2>Content question three</h2>
    },
  ]

  const itemsRadioGroupArray = [
    {
      id: 'public',
      label: 'Public',
      additionalText: 'Everybody can view your profile and learning activities.'
    },
    {
      id: 'organization',
      label: 'Organization',
      additionalText: 'Only people from your organization with a Degreed account can view your profile and learning activities.'
    },
    {
      id: 'private',
      label: 'Private',
      additionalText: 'Only you can view your profile and learning activities.'
    }
  ]

  const itemsTabsArray = [    
    {
      title: 'Visibility',
      content: <RadioGroup items={itemsRadioGroupArray} defaultValue="public" />
    },
    {
      title: 'Opt-in',
      content: (
        <Switch
          id="optIn" 
          label="Skill Coach" 
          additionalText="By opting into Skill Coach, your manager, and their managers, have access to your data to help you develop your skills." 
        />
      ) 
    }
  ]

  return (
    <div className={PandaCSS.Profile.cssContainer}>
      <div className={PandaCSS.Profile.cssContainerBoxes}>
        <Box title="Picture">
          <Avatar />
        </Box>
        <Box>
          <div className={PandaCSS.Profile.cssContainerLinksProfile}>
            {
              linkItems.map(({ text, url }, index) => url === '' ? (
                <p 
                key={index}
                className={PandaCSS.Profile.cssTextGroupStyles}
                >
                  {text}
                </p>
              ) : (
                <Link 
                  key={index}
                  href={url}
                  className={PandaCSS.Profile.cssLinksStyles}
                >
                  {text}
                </Link>
              ))              
            }
          </div>
        </Box>
      </div>
      <Box title="Personal Information">
        <Form />
      </Box>
      <div className={PandaCSS.Profile.cssContainerBoxes}>
        <Box>
          <Tabs items={itemsTabsArray} />
        </Box>
        <Box title="FAQ">
          <Accordion items={accordionItems} />
        </Box>
      </div>
    </div>
  )
}