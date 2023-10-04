import { css } from '../../../styled-system/css'


const cssContainer = css({
  w: '100%',
  maxW: '30rem',
  display: 'flex', 
  flexDir: 'column',
  gap: '1rem',
})

const cssSwitchContainer = css({
  w: '100%',
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'space-between',
})

const cssSwitchRoot = css({
  w: '2.625rem',
  h: '1.563rem',
  backgroundColor: 'gray',
  borderRadius: '9999px',
  position: 'relative',
  '&[data-state="checked"]': {
    backgroundColor: 'secondary',
  },
  cursor: 'pointer',
})

const cssSwitchThumb = css({
  display: 'block',
  width: '1.313rem',
  height: '1.313rem',
  backgroundColor: 'white',
  borderRadius: '100%',
  transition: 'transform 100ms',
  transform: 'translateX(0.125rem)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(1.188rem)'
  }
})

const cssLabel = css({
  color: 'black',
  fontSize: '0.813rem',
  fontWeight: '500',
  lineHeight: '1rem',  
  cursor: 'pointer',
})

const cssTextAdditional = css({
  color: 'gray100',
  fontSize: '0.7rem',
  lineHeight: '0.9rem',
  mt: '0.3rem',
})

export const Switch = {
  cssContainer,
  cssLabel,
  cssTextAdditional,
  cssSwitchRoot,
  cssSwitchContainer,
  cssSwitchThumb
}