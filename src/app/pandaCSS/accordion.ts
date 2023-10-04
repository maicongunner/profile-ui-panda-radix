import { css } from '../../../styled-system/css';


const cssAccordionRoot = css({
  borderRadius: '0.375rem',
  w: '100%',
  boxShadow: '0 0.125rem 0.625rem black',
})

const cssAccordionItem = css({
  overflow: 'hidden',
  marginTop: '0.063rem',
  marginBottom: '0.2rem',
})

const cssAccordionHeader = css({
  display: 'flex',
})

const cssAccordionTrigger = css({
  backgroundColor: 'gray.50',
  w: '100%',
  p: '0',
  h: '2.813rem',
  flex: '1',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '0.8rem',
  lineHeight: '1rem',
  fontWeight: '500',
  borderBottom: '0.063rem solid token(colors.gray, gray)',
  _hover: {
    backgroundColor: 'quaternary'
  }
})

const cssAccordionContent = css({
  overflow: 'hidden',
  fontSize: '0.7rem',
  color: 'black',
  '&[data-state="open"]': {
    animation: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)'
  },
  '&[data-state="closed"]': {
    animation: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)'
  },
  p: '1.25rem 0',  
})

const cssAccordionContentText = css({
  p: '0.938rem 0',
})

const cssAccordionChevron = css({
  color: 'gray100',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',  
})

const cssAccordionChevronOpened = css({
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  transform: 'rotate(180deg)',
})

export const Accordion = {
  cssAccordionChevron,
  cssAccordionChevronOpened,
  cssAccordionContent,
  cssAccordionContentText,
  cssAccordionHeader,
  cssAccordionItem,
  cssAccordionRoot,
  cssAccordionTrigger,
}