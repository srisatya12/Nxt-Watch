import styled from 'styled-components'

// {SidebarCont, UlSidebarCont,SocialLinkCont,Heading,LinksCont,LinkImg}

export const SidebarCont = styled.div`
  background-color: ${props => (props.darkMode ? '#231f20' : '#ffffff')};
  width: 270px;
  height: 90vh;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const UlSidebarCont = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`
export const SocialLinkCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-left: 18px;
`
export const Heading = styled.h1`
  color: ${props => (props.darkMode ? '#f1f1f1' : '#1e293b')};
  font-size: ${props => (props.para ? '17' : '19px')};
  font-weight: bold;
  ${props => {
    if (props.para) {
      return `line-height:1.5;`
    }
    return null
  }}
`
export const LinksCont = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
export const LinkImg = styled.img`
  width: 35px;
`