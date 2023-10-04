import React, { useRef, useState } from 'react';
import * as RadixForm from '@radix-ui/react-form';
import { Button } from './button';
import { Textarea } from './textarea';
import { Input } from './input';
import { PandaCSS } from '@/app/pandaCSS';
import { Select } from './select';

const Form = () => {
  const selectItems = [
    { value: 'option1', label: 'Option one' },
    { value: 'option2', label: 'Option two' },
    { value: 'option3', label: 'Option three' },
    { value: 'option4', label: 'Option four' },
    { value: 'option5', label: 'Option five' },
  ];

  return (
    <>
      <div className={PandaCSS.Form.cssTextRequiredFieldsContainer}>
        <h4 className={PandaCSS.Form.cssTextRequiredFields}>
          * these fields are required
        </h4>
      </div>
      <RadixForm.Root
        className={PandaCSS.Form.cssFormRoot}
        onSubmit={(event) => {
          const data = Object.fromEntries(new FormData(event.currentTarget));
          console.log('form data', data)

          event.preventDefault();
        }}
      >
        <RadixForm.Field 
          className={PandaCSS.Form.cssFormField} 
          name="name"
        >
          <div className={PandaCSS.Form.cssContainerFormFields}>
            <RadixForm.Label className={PandaCSS.Form.cssFormLabel}>
              First Name
              <span className={PandaCSS.Form.cssTextRequiredFields}>
                *
              </span>
            </RadixForm.Label>
            <RadixForm.Message 
              className={PandaCSS.Form.cssTextRequiredFields}  
              match="valueMissing"
            >
              Please enter your first name
            </RadixForm.Message>
          </div>
          <RadixForm.Control asChild>
            <Input name="firstName" />
          </RadixForm.Control>
        </RadixForm.Field>
        <RadixForm.Field 
          className={PandaCSS.Form.cssFormField} 
          name="lastName"
        >
          <div className={PandaCSS.Form.cssContainerFormFields}>
            <RadixForm.Label className={PandaCSS.Form.cssFormLabel}>
              Last Name
              <span className={PandaCSS.Form.cssTextRequiredFields}>
                *
              </span>
            </RadixForm.Label>
            <RadixForm.Message 
              className={PandaCSS.Form.cssTextRequiredFields}  
              match="valueMissing"
            >
              Please enter your last name
            </RadixForm.Message>
          </div>
          <RadixForm.Control asChild>
            <Input name="lastName" />
          </RadixForm.Control>
        </RadixForm.Field>
        <RadixForm.Field 
          className={PandaCSS.Form.cssFormField} 
          name="email"
        >
          <div className={PandaCSS.Form.cssContainerFormFields}>
            <RadixForm.Label className={PandaCSS.Form.cssFormLabel}>
              Email
              <span className={PandaCSS.Form.cssTextRequiredFields}>
                *
              </span>
            </RadixForm.Label>
            <RadixForm.Message 
              className={PandaCSS.Form.cssTextRequiredFields}  
              match="valueMissing"
            >
              Please enter your email
            </RadixForm.Message>
            <RadixForm.Message 
              className={PandaCSS.Form.cssTextRequiredFields}  
              match="typeMismatch"
            >
              Please provide a valid email
            </RadixForm.Message>
          </div>
          <RadixForm.Control asChild>
            <Input type="email" name="email" />
          </RadixForm.Control>
        </RadixForm.Field>

        <RadixForm.Field 
          className={PandaCSS.Form.cssFormField} 
          name="biography"
        >
          <div className={PandaCSS.Form.cssContainerFormFields}>
            <RadixForm.Label 
              className={PandaCSS.Form.cssFormLabel}
            >
              Biography
              <span className={PandaCSS.Form.cssTextRequiredFields}>
                *
              </span>
            </RadixForm.Label>
            <RadixForm.Message 
              className={PandaCSS.Form.cssTextRequiredFields} 
              match="valueMissing"
            >
              Please enter a biography
            </RadixForm.Message>
          </div>
          <RadixForm.Control asChild>
            <Textarea name="biography" />          
          </RadixForm.Control>
          <span className={PandaCSS.Form.cssFormAdditionalText}>
          Maximum of 1000 Words
          </span>
        </RadixForm.Field>

        <RadixForm.Field 
          className={PandaCSS.Form.cssFormField} 
          name="profileName"
        >
          <div className={PandaCSS.Form.cssContainerFormFields}>
            <RadixForm.Label className={PandaCSS.Form.cssFormLabel}>
              Profile Name
              <span className={PandaCSS.Form.cssTextRequiredFields}>
                *
              </span>
            </RadixForm.Label>
            <RadixForm.Message 
              className={PandaCSS.Form.cssTextRequiredFields}  
              match="valueMissing"
            >
              Please enter your location
            </RadixForm.Message>
          </div>
          <RadixForm.Control asChild>
            <Input name="profileName" />
          </RadixForm.Control>
          <span className={PandaCSS.Form.cssFormAdditionalText}>
            This will be your profile URL (e.g. degreed.com/profile/profilename)
          </span>
        </RadixForm.Field>

        <RadixForm.Field
          className={PandaCSS.Form.cssFormField} 
          name="jobRole"
        >
          <div className={PandaCSS.Form.cssContainerFormFields}>
            <RadixForm.Label 
              className={PandaCSS.Form.cssFormLabel}
            >
              Job Role
            </RadixForm.Label>
          </div>
          <RadixForm.Control asChild>            
            <Select name="jobRole" items={selectItems} />
          </RadixForm.Control>        
        </RadixForm.Field>

        <RadixForm.Field 
          className={PandaCSS.Form.cssFormField} 
          name="lastName"
        >
          <div className={PandaCSS.Form.cssContainerFormFields}>
            <RadixForm.Label className={PandaCSS.Form.cssFormLabel}>
              Location
              <span className={PandaCSS.Form.cssTextRequiredFields}>
                *
              </span>
            </RadixForm.Label>
            <RadixForm.Message 
              className={PandaCSS.Form.cssTextRequiredFields}  
              match="valueMissing"
            >
              Please enter your location
            </RadixForm.Message>
          </div>
          <RadixForm.Control asChild>
            <Input name="location" />
          </RadixForm.Control>
        </RadixForm.Field>
        <RadixForm.Submit asChild>
          <Button label="Save Changes" />
        </RadixForm.Submit>
      </RadixForm.Root>
    </>
  )
}

export { Form };