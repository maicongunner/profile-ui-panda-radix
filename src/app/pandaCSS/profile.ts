import { css } from '../../../styled-system/css';


const cssContainer = css({  
  maxWidth: '70rem',
  m: '0 auto',
  pt: '2rem',
  pb: '10rem',
  px: '1rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gridGap: '2.5rem',
  w: '100%',
  lg: {
    gridTemplateColumns: '1fr 2fr 1fr',
  },
})


const cssContainerAvatar = css({
  w: '100%',
  py: '3rem 4rem',
  display: 'flex',
  flexDir: 'column',
  gap: '1rem',
  lg: {
    flexDir: 'row'
  }
})

const cssTextGroupStyles = css({
  fontSize: '0.7rem',
  color: 'gray100',
  fontWeight: '600',
})

const cssLinksStyles = css({
  fontSize: '0.7rem',
  color: 'gray100',
  fontWeight: '600',
  _hover: { 
    textDecoration: 'underline', 
    cursor: 'pointer', 
    color: 'secondary'
  }
})

const cssContainerLinksProfile = css({
  display: 'flex',
  gap: '0.5rem',
  flexWrap: 'wrap',
})

const cssContainerTextsProfile = css({
  display: 'flex',
  flexDirection: 'column',
})

const cssContainerTabs = css({
  w: '100%',
  maxWidth: '70rem',
  margin: '0 auto',
  px: '0.938rem',
  position: 'relative',
  top: '-2.813rem',
})

const cssContainerTabsContent = css({
  backgroundColor: 'white',
  marginTop: '2rem',
  position: 'relative',
})

const cssContainersSelectsStyle = css({
  display: 'flex',
  gap: '1rem'
})

const cssContainerBoxes = css({
  display: 'flex', 
  flexDirection: 'column', 
  gap: '1rem',
})

export const Profile = {
  cssContainer,
  cssContainerAvatar,
  cssContainerLinksProfile,
  cssContainerTabs,
  cssContainerTextsProfile,
  cssTextGroupStyles,
  cssLinksStyles,
  cssContainerTabsContent,
  cssContainersSelectsStyle,
  cssContainerBoxes,
}