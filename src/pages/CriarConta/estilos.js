import {Platform} from 'react-native';
import styled from 'styled-components/native';
import Input from '~/Componentes/Input'
import Button from '~/Componentes/Button'

export const Container = styled.KeyboardAvoidingView.attrs({

  behavior:'padding'
})`
  flex:1;
  justify-content:center;
  align-items:center;
  padding: 0 30px;
`;
export const Form = styled.View`
  align-self:stretch;
  margin-top:50px;

`;
export const FormInput=styled(Input)`
margin-bottom:10px;
`;

export const SubmitButton=styled(Button)`
margin-top:5px;

`;
export const LinkCConta=styled.TouchableOpacity`
margin-top:10px;
`;
export const LinkCContaText=styled.Text`
color:#fff;
font-weight:bold;
margin-bottom:20px;

`
