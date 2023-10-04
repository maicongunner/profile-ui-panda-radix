import { css } from '../../../styled-system/css';

const cssAvatarRoot = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  w: '150px',
  h: '150px',
  borderRadius: '100%'
})

const cssAvatarImage = css({
  w: '100%',
  h: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const cssAvatarFallback = css({
  w: '100%',
  h: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bg: 'white',
  fontSize: '15px',
  lineHeight: '1',
  fontWeight: '500', 
})

export const Avatar = {
  cssAvatarRoot,
  cssAvatarImage,
  cssAvatarFallback
}