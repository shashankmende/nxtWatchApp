import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *:focus {
        outline:none;
    }

`

export const LoginContainer = styled.div`
  height: 100vh;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  background-color: #ffffff;
  box-shadow: 0px 4px 16px 0px;
  border-radius: 8px;
  padding: 15px;
  width: 30%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 576px) {
    width: 50%;
  }
`

export const CompanyImg = styled.img`
  width: 200px;
  align-self: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  color: #231f20;
  margin-bottom: 10px;
`

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #616e7c;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`

export const CheckBoxInput = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Roboto';
  margin-bottom: 20px;
`

export const LoginBtn = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  border: none;
  background-color: #3b82f6;
  cursor: pointer;
  outline: none;
`

export const ErrorPara = styled.p`
  font-family: 'Roboto';
  color: red;
`
