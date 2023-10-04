import { css } from '../../../styled-system/css'

const cssBoxContainer = css({
  borderRadius: '0.5rem',
  boxShadow: '0 1px 5px token(colors.black50, black50)',
  backgroundColor: 'white',
  p: '1rem',
  boxSizing: 'border-box',
  h: 'fit-content',
  lg: {
    p: '2rem',
  }
})

const cssBoxContainerTitle = css({
  marginBottom: '2rem',
  fontWeight: '600',
})

export const Box = {
  cssBoxContainer,
  cssBoxContainerTitle
}