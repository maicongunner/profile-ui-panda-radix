import { PandaCSS } from '@/app/pandaCSS'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
}

const Button = ({ label, type = 'button', ...props }: ButtonProps) => {
  return (
    <button type={type} className={PandaCSS.Button.cssButton} {...props}>
      {label}
    </button>
  )
}

export { Button }