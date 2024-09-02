
import styled from 'styled-components'

// {NavLinkBtn,Span}

export const NavLinkBtn = styled.div`
  background-color: ${props => {
    if (props.isActive) {
      if (props.darkMode) {
        return '#383838'
      }
      return '#f1f5f9'
    }
    return 'transparent'
  }};
  border: 0px;
  outline: none;
  cursor: pointer;
  gap: 20px;
  width: 100%;
  height: 50px;
  color: ${props => (props.darkMode ? '#cccccc' : '#383838')};
  font-size: 20px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${props => {
    if (props.sidebar) {
      return `
          padding-left:30px;
        `
    }
    return `
      padding-left:120px;
      @media screen and (min-width:576px){
        padding-left:150px;
      }
    `
  }}
`
export const Span = styled.span`
  color: ${props => props.activeColor};
`
