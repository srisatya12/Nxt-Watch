
import styled from 'styled-components'

// {CardCont,ThumbnailImg,VideoDetailCont,ChannelImg,Title,LiCont}

export const CardCont = styled.div`
  ${props => {
    if (props.isTrending) {
      return `
        display:flex;
        flex-direction:column;
        width:100%;
        margin-top:20px;
        @media screen and (min-width:768px){
            flex-direction:row;
            align-items:flex-start;
        }
        `
    }
    return `
        display:flex;
        flex-direction:column;
        width:100%;`
  }}
`
export const ThumbnailImg = styled.img`
  ${props => {
    if (props.isTrending) {
      return `
            width:100%;
            @media screen and (min-width:768px){
              width:50%;
            }

            @media screen and (min-width:992px){
              width:30%;
            }
        `
    }
    return `width:100%;`
  }}
`

export const VideoDetailCont = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 15px;
`
export const ChannelImg = styled.img`
  width: 35px;
  ${props => {
    if (props.isTrending) {
      return `
          @media screen and (min-width:768px){
            display:none;
          }
        `
    }
    return `display:block;`
  }}
`
export const Title = styled.p`
  color: ${props => {
    if (props.darkMode) {
      return `${props.para ? '#7e858e' : '#f9f9f9'}`
    }
    return `${props.para ? '#7e858e' : '#000000'}`
  }};
  font-size: ${props => (props.para ? '13px' : '15px')};
  margin: 0;
  line-height: ${props => (props.para ? null : 1.5)};
  padding-top: ${props => (props.para ? '10px' : null)};

  ${props => {
    if (props.para) {
      if (props.isTrending) {
        return `
            @media screen and (max-width:767px){
              display:flex;
              align-items:center;
            }
            line-height:1.5;
          `
      }
      return `
          display:flex;
          align-items:center; 
        `
    }
    return null
  }}
`
export const Span = styled.span`
  ${props => {
    if (props.isTrending) {
      return `
        @media screen and (min-width:768px){
          display:none;
        }
      `
    }
    return `display:block;`
  }}
`
export const LiCont = styled.li`
  ${props => {
    if (props.isTrending) {
      return `
        width:100%;
        margin-top:20px;`
    }
    return `
        width:100%;
        @media screen and (min-width:768px){
            width:45%;
        }
    
        @media screen and (min-width:992px){
            width:30%;
        }`
  }}
`
