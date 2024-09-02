import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {PopupLogoutCancelBtn} from '../Header/styledComponents'

// {HomeBgCont,HomeCont, HomeRightCont,BannerCont,CloseCont,CloseBannerBtn,Paragraph
// SearchCont,SearchInput,SearchBtn,HomeResultCont,UlHomeCont
// EmptyViewCont,EmptyImg,EmptyHeading,RetryBtn,LoaderCont}

export const RouteLink = styled(Link)`
  text-decoration: none;
`

export const HomeBgCont = styled.div`
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`
export const HomeCont = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`
export const HomeRightCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
`
export const BannerCont = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  padding: 30px;
  flex-direction: column;
`
export const CloseCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CloseBannerBtn = styled.button`
  border: 0px;
  background: transparent;
  outline: none;
  cursor: pointer;
  font-size: 20px;
`
export const Paragraph = styled.p`
  color: #181818;
  font-size: 20px;
`
export const GetPremiumBtn = styled(PopupLogoutCancelBtn)`
  color: #1e293b;
  border: 1px solid #181818;
  width: 120px;
  font-weight: bold;
  margin-top: 25px;
  border-radius: 0px;
`
export const HomeResultCont = styled.div`
  width: 100%;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 95%;
  }
`
export const SearchCont = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => (props.darkMode ? '#606060' : '#94a3b8')};
  margin: 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const SearchInput = styled.input`
  border: 0px;
  outline: none;
  width: 100%;
  height: 30px;
  background-color: ${props => (props.darkMode ? 'transparent' : '#f9f9f9')};
  padding-left: 16px;
  color: ${props => (props.darkMode ? '#f1f1f1' : '#0f0f0f')};
`
export const SearchBtn = styled.button`
  width: 80px;
  height: 30px;
  background-color: ${props => (props.darkMode ? '#383838' : '#ebebeb')};
  border: 0px;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  border-left: 1px solid ${props => (props.darkMode ? '#606060' : '#94a3b8')};
  color: ${props => (props.darkMode ? '#7e858e' : '#231f20')};
`
export const UlHomeCont = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`
export const EmptyViewCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
`
export const EmptyImg = styled.img`
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const EmptyHeading = styled.h1`
  font-size: ${props => (props.para ? '15px' : '25px')};
  text-align: center;
  margin: 0;
  padding-top: 15px;
  color: ${props => {
    if (props.para) {
      return `${props.darkMode ? '#64748b' : '#64748b'}`
    }
    return `${props.darkMode ? '#ffffff' : '#0f0f0f'}`
  }};
`
export const RetryBtn = styled.button`
  background-color: #00306e;
  border: 0px;
  outline: none;
  cursor: pointer;
  width: 110px;
  height: 45px;
  border-radius: 5px;
  color: #ffffff;
  margin-top: 20px;
`
export const LoaderCont = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  height: 50vh;
`