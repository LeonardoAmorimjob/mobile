import styled from 'styled-components/native';
import Input from '~/Componentes/Input'
import Botao from '~/Componentes/Button'

export const Container = styled.SafeAreaView`
flex:1;
`;
export const Form = styled.ScrollView.attrs({
  showsVerticalScroll:false,
  contentContainerStyle:{padding:30}
})`
  align-self:stretch;


`;
export const FormInput=styled(Input)`
margin-bottom:10px;
`;

export const SubmitButton=styled(Botao)`
margin-top:5px;
`;
export const SairButton=styled(Botao)`
margin-top:5px;
color:#fff;
background:#f00;
`;
export const Titulo = styled.Text`
font-size:20px;
color:#fff;
font-weight:bold;
align-self:center;
margin-top:30px;
`;

export const Separator = styled.View`
height:1px;
background:rgba(255,255,255,0.2);
margin:20px 0 30px;
`;

