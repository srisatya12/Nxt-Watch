
import styled from 'styled-components'

import {HomeBgCont} from '../Home/styledComponents'
// { TrendingLogoCont,TrendingImgCont,}

export const TrendingBgCont = styled(HomeBgCont)`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const TrendingLogoCont = styled.div`
  width: 100%;
  background-color: ${props => (props.darkMode ? '#231f20' : '#cccccc')};
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  @media screen and (min-width: 768px) {
    padding-left: 40px;
  }
`
export const TrendingImgCont = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: ${props => (props.darkMode ? '#000000' : '#cbd5e1')};
  color: #ff0000;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
