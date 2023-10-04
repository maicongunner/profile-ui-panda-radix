import { css } from '../../../styled-system/css'

const cssButton = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.25rem',
  p: '0.938rem 1rem',
  fontSize: '0.8rem',
  lineHeight: '1rem',
  fontWeight: '500',
  w: 'fit-content',
  cursor: 'pointer',
  backgroundColor: 'secondary',
  color: 'white',
  border: '0.125rem solid white',
  _hover: {
    border: '0.125rem solid token(colors.secondary, secondary)',
    color: 'secondary',
    backgroundColor: 'white',
  },
})

export const Button = {
  cssButton
}