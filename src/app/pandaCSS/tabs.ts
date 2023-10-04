import { css } from '../../../styled-system/css';

const cssTabsRoot = css({
  display: 'flex',
  flexDirection: 'column',
  w: '100%',
  top: '-2.813rem'
})

const cssTabsList = css({
  display: 'flex',
  flexShrink: '0',    
})

const cssTabsTrigger = css({
  h: '2.813rem',
  display: 'flex',
  w: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.938rem',
  lineHeight: '1rem',
  userSelect: 'none',
  color: 'black100',
  borderTopLeftRadius: '0.5rem',
  borderTopRightRadius: '0.5rem',
  borderBottomWidth: '0.125rem',
  borderBottomStyle: 'solid',
  borderBottomColor: 'white',
  px: '1rem',
  cursor: 'pointer',
  _hover: {
    fontWeight: '600',
    color: 'secondary',    
    borderBottomColor: 'secondary'
  },
  '&[data-state="active"]': {
    color: 'secondary',
    borderBottomColor: 'secondary'
  }
})

const cssTabActiveStyle = css({
  fontWeight: '600',
  color: '#000000',
})  

const cssTabsContent = css({
  flexGrow: '1',
  p: '1.25rem 0',
  backgroundColor: 'white',
  borderBottomLeftRadius: '0.375rem',
  borderBottomRightRadius: '0.375rem',
  outlineWidth: '0',
}) 

export const Tabs = {
  cssTabsRoot,
  cssTabsContent,
  cssTabsList,
  cssTabsTrigger,
  cssTabActiveStyle
}