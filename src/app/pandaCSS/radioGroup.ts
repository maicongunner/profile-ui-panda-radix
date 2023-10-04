import { css } from '../../../styled-system/css';


const cssRadioGroupRoot = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

const cssGroupItemContainer = css({
  display: 'flex', 
  alignItems: 'flex-start',
})

const cssRadioGroupItem = css({
  mt: '0.125rem',
  width: '0.625rem',
  height: '0.625rem',
  borderRadius: '100%',
  cursor: 'pointer',
  '&[data-state="checked"]': {    
    backgroundColor: 'secondary',
    boxShadow: '0 0 0 2px token(colors.secondary, secondary)',
  },
  '&[data-state="unchecked"]': {
    boxShadow: '0 0 0 2px token(colors.gray100, gray100)',
  }
})

const cssRadioGroupIndicator = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  borderRadius: '100%',
  border: '1px solid white',
})

const cssContainerLabel = css({
  display: 'flex',
  flexDir: 'column',
  boxSizing: 'border-box',
  w: '90%',
  paddingLeft: '0.938rem',
})

const cssLabel = css({
  color: 'black',
  fontSize: '0.813rem',
  fontWeight: '500',
  lineHeight: '1',  
  cursor: 'pointer',
})

const cssTextAdditional = css({
  color: 'gray100',
  fontSize: '0.7rem',
  lineHeight: '0.9rem',
  cursor: 'pointer',
  mt: '0.3rem',
})

export const RadioGroup = {
  cssLabel,
  cssTextAdditional,
  cssContainerLabel,
  cssRadioGroupIndicator,
  cssRadioGroupItem,
  cssRadioGroupRoot,
  cssGroupItemContainer,
}