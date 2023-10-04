import { css } from '../../../styled-system/css';


const cssFormRoot = css({
  w: 'full',
  display: 'flex',
  flexDir: 'column',
  gap: '1rem',
})

const cssFormField = css({
  display: 'grid',
  marginBottom: '0.625rem',
})

const cssFormLabel = css({
  fontSize: '0.8rem',
  lineHeight: '1rem',
  fontWeight: '500',
  color: 'black',
  my: '0.2rem',
})

const cssFormAdditionalText = css({
  fontSize: '0.6rem',
  lineHeight: '1rem',
  my: '0.2rem',
  color: 'gray100',
})

const cssContainerFormFields = css({
  display: 'flex', 
  alignItems: 'baseline', 
  justifyContent: 'space-between',
})

const cssTextRequiredFields = css({
  color: 'red',
  fontSize: '0.7rem',
  lineHeight: '0.9rem',
})

const cssTextRequiredFieldsContainer = css({
  mb: '2rem'
})

export const Form = {
  cssFormField,
  cssFormRoot,
  cssFormLabel,
  cssContainerFormFields,
  cssFormAdditionalText,
  cssTextRequiredFields,
  cssTextRequiredFieldsContainer,
}