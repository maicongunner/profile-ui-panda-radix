import { PandaCSS } from '@/app/pandaCSS'
import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = (props: InputProps) => {
  return (
    <input 
      {...props}
      className={PandaCSS.Input.cssInput}
      required
    />
  )
}

export { Input }