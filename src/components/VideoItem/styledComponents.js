
import styled from 'styled-components'

import {Title} from '../VideosListItem/styledComponents'
// {ResultCont,VideoCont, ResponsiveCont,SaveCont,BtnCont,SocialBtn,Title}

export const ResultCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`
export const VideoCont = styled.div`
  width: 100%;
`
export const ResponsiveCont = styled.div`
  width: 100%;
`
export const DescCont = styled.div`
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding-left: 0px;
  }
`
export const SaveCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  border-bottom: 1px solid #7e858e;
  padding-bottom: 25px;
  margin-bottom: 22px;
`
export const BtnCont = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const SocialBtn = styled.button`
  border: 0px;
  outline: non;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  padding: 0;
  color: ${props => {
    if (props.liked) {
      return '#2563eb'
    }
    if (props.disliked) {
      return '#2563eb'
    }
    if (props.saved) {
      return '#2563eb'
    }
    return '#64748b'
  }};
`
export const DescPara = styled(Title)`
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    padding-left: 70px;
  }
`
