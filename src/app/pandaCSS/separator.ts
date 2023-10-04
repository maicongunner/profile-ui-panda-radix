import { css } from '../../../styled-system/css';


const cssSeparatorRoot = css({
  backgroundColor: 'gray',
  my: '0.5rem',
  '&[data-orientation="horizontal"]': {
    h: '0.063rem',
    w: '100%',
  },
  '&[data-orientation="vertical"]': {
    h: '100%',
    w: '0.063rem',
  }
})


export const Separator = {
  cssSeparatorRoot,
}