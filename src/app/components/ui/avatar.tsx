import React from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';
import { PandaCSS } from '../../pandaCSS'

const Avatar = () => {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <RadixAvatar.Root className={PandaCSS.Avatar.cssAvatarRoot}>
        <RadixAvatar.Image
          className={PandaCSS.Avatar.cssAvatarImage}
          src="https://prod.degreedcdn.com/content/profile-pictures/large-15525049-9eaab00f-beb5-4359-a5cf-464a78abb618.png?v=0010155400"
          alt="Colm Tuite"
        />
        <RadixAvatar.Fallback className={PandaCSS.Avatar.cssAvatarFallback} delayMs={600}>
          Image
        </RadixAvatar.Fallback>
      </RadixAvatar.Root>
    </div>
  )
}

export { Avatar }