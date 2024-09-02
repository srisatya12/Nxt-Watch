
import styled from 'styled-components'

// {LoginBgCont, Form, LoginImg, Label, Input,CheckBoxInput,LabelShowPass, ShowPassCont, LoginBtn,ErrorPara}

export const LoginBgCont = styled.div`
  background-color: ${props => (props.darkMode ? '#212121' : '#ffffff')};
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Form = styled.form`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};
  width: 90%;
  align-self: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0px 4px 32px 0px
    ${props => (props.darkMode ? '#231f20' : '#ebebeb')};
  padding-top: 35px;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 50px;
  }

  @media screen and (min-width: 992px) {
    width: 40%;
  }

  @media screen and (min-width: 1200px) {
    width: 30%;
  }
`
export const LoginImg = styled.img`
  width: 130px;
  align-self: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    width: 180px;
  }
`
export const Label = styled.label`
  color: ${props => (props.darkMode ? '#f9f9f9' : '#475569')};
  font-size: 14px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 6px;
`
export const LabelShowPass = styled.label`
  color: ${props => (props.darkMode ? '#f1f5f9' : '#0f0f0f')};
  font-size: 17px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid #94a3b8;
  border-radius: 5px;
  padding-left: 20px;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#475569')};
  background: ${props => (props.darkMode ? 'transparent' : '')};
`
export const CheckBoxInput = styled.input`
  margin-right: 10px;
`
export const ShowPassCont = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`
export const LoginBtn = styled.button`
  background-color: #3b82f6;
  border: 0px;
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  color: #ffffff;
  margin-top: 25px;
  font-size: 15px;
`
export const ErrorPara = styled.p`
  color: #ff0000;
  font-size: 14px;
`
