
import { TextareaHTMLAttributes } from 'react'
import { PandaCSS } from '@/app/pandaCSS'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = (props: TextareaProps) => {
  return (
    <textarea 
    {...props} 
    className={PandaCSS.Textarea.cssTextarea} 
      required 
    />
  )
}

export { Textarea }
