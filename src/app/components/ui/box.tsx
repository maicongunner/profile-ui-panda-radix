import { PandaCSS } from '@/app/pandaCSS'
import { ReactNode } from 'react'

type BoxProps = {
  title?: string
  children: ReactNode
}

const Box = ({ title = '', children }: BoxProps) => {

  return (
    <div className={PandaCSS.Box.cssBoxContainer}>
      {title.length > 0 && (
        <h2 className={PandaCSS.Box.cssBoxContainerTitle}>
        {title}
      </h2>
      )}

      {children}
    </div>
  )
}


export { Box }