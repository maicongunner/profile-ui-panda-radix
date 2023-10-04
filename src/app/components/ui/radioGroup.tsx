import React, { useState } from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { PandaCSS } from '@/app/pandaCSS';

type RadioItemProps = {
  id: string
  label: string
  additionalText?: string
}

type RadioGroupProps = RadixRadioGroup.RadioGroupProps & {
  items: RadioItemProps[]
}

const RadioGroup = ({ defaultValue, items }: RadioGroupProps) => {
  const [ checkedValue, setCheckedValue ] = useState(defaultValue)

  return (
    <RadixRadioGroup.Root 
      className={PandaCSS.RadioGroup.cssRadioGroupRoot}
      aria-label="Visibility"
      defaultValue={defaultValue}
    >
    {items.map(({ id, label, additionalText }: RadioItemProps, index) => {
      const isChecked = id === checkedValue

      return (
        <div key={index} className={PandaCSS.RadioGroup.cssGroupItemContainer}>
          <RadixRadioGroup.Item      
            checked={isChecked}
            className={PandaCSS.RadioGroup.cssRadioGroupItem} 
            value={id} 
            id={`r${index}`}
            onClick={() => setCheckedValue(id)}
          >
            <RadixRadioGroup.Indicator 
              className={PandaCSS.RadioGroup.cssRadioGroupIndicator} 
            />
          </RadixRadioGroup.Item>
          <label 
            className={PandaCSS.RadioGroup.cssContainerLabel} 
            htmlFor={`r${index}`}
          >
            <h4 className={PandaCSS.RadioGroup.cssLabel}>{label}</h4>
            {additionalText && (
              <span className={PandaCSS.RadioGroup.cssTextAdditional}>
                {additionalText}
              </span>
            )}
          </label>
        </div>
      )
    })}
    </RadixRadioGroup.Root>
  )
}

export default RadioGroup;