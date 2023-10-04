import React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import { PandaCSS } from '@/app/pandaCSS';
import { Separator } from './separator';

type SwitchProps = {
  label: string
  id: string
  additionalText?: string
}

const Switch = ({ label, id, additionalText }: SwitchProps) => (
  <div className={PandaCSS.Switch.cssContainer}>
    <div className={PandaCSS.Switch.cssSwitchContainer}>      
      <label 
        className={PandaCSS.Switch.cssLabel} 
        htmlFor={id}
        style={{ paddingRight: 15 }}
      >
        {label}
      </label>
      <RadixSwitch.Root className={PandaCSS.Switch.cssSwitchRoot} id={id}>
        <RadixSwitch.Thumb className={PandaCSS.Switch.cssSwitchThumb} />
      </RadixSwitch.Root>
    </div>
    {additionalText && (
      <>
        <Separator />
        <span className={PandaCSS.Switch.cssTextAdditional}>
          {additionalText}
        </span>
      </>
    )}
  </div>
);

export { Switch };