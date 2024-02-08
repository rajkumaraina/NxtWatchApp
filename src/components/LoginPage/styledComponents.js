import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`
export const LoginContainter = styled.div`
  height: 70%;
  width: 35%;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImageElement = styled.img`
  width: 50%;
  height: 35px;
  margin-top: 28px;
`
export const FormElement = styled.form`
  width: 80%;
  margin: 35px;
`
export const InputElement = styled.input`
  width: 100%;
  color: #0f0f0f;
  padding: 8px;
  margin: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 0px;
`
export const LabelElement = styled.label`
  color: #64748b;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  margin-left: 0;
  padding: 0;
`
export const Checkbox = styled.input`
  margin: 0px;
`
export const CheckboxLabel = styled(LabelElement)`
  width: 80%;
  margin: 0;
  margin-left: 8px;
  color: #000000;
  font-weight: 500;
  font-size: 14px;
`
export const ButtonElement = styled.button`
  width: 100%;
  margin: 18px;
  margin-left: 0;
  margin-bottom: 0;
  background-color: #3b82f6;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 15px;
  border: 0 none;
`
export const ErrorPara = styled.p`
  color: #ff0b37;
  font-size: 14px;
  margin: 2px;
`
