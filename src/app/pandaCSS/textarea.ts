import { css } from '../../../styled-system/css';

const cssTextarea = css({
  w: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.25rem',
  fontSize: '0.938rem',
  color: 'black',
  resize: 'none',
  p: '0.625rem',
  border: '1px solid token(colors.gray, gray)',
  _selection: {
    backgroundColor: 'black',
    color: 'black',
  }
})

export const Textarea = {
  cssTextarea
}