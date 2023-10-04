import { css } from '../../../styled-system/css'


const cssSelectTrigger = css({
  w: '100%',
  display: 'inline-flex',  
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '0.25rem',
  p: '0 0.938rem',
  fontSize: '0.813rem',
  lineHeight: '1rem',
  h: '2.188rem',
  gap: '0.313rem',
  backgroundColor: 'white',
  color: 'black',
  border: '0.063rem solid token(colors.gray, gray)',
  '&[data-placeholder]': {
    color: 'black',
  },
})


const cssSelectIcon = css({
  color: 'black',
})

const cssSelectContent =  css({
  w: '100%',
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: '0.375rem',
})

const cssSelectViewport = css({
  padding: '0.313rem 0',
  border: '0.063rem solid token(colors.gray, gray)',
})

const cssSelectItem = css({
  fontSize: '0.813rem',
  lineHeight: '0.063rem',
  color: 'black',
  borderRadius: '0.188rem',
  display: 'flex',
  alignItems: 'center',
  h: '1.563rem',
  p: '0 1rem',
  position: 'relative',
  userSelect: 'none',
  '&[data-disabled]': {
    color: 'gray',
    pointerEvents: 'none',
  },
  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: 'secondary',
    color: 'white',
  }
})

const cssSelectLabel = css({
  p: '0 1.563rem',
  fontSize: '0.75rem',
  lineHeight: '1.563rem',
  color: 'black',
})

const cssSelectItemIndicator = css({
  position: 'absolute',
  left: '-0.3rem',
  w: '1.563rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
})

const cssSelectScrollButton = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  h: '1.563rem',
  backgroundColor: 'white',
  color: 'black',
  cursor: 'default',
})

export const Select = {
  cssSelectContent,
  cssSelectIcon,
  cssSelectItem,
  cssSelectItemIndicator,
  cssSelectLabel,
  cssSelectScrollButton,
  cssSelectTrigger,
  cssSelectViewport
}