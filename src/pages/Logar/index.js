import React,{useRef,useState} from 'react';
import {useDispatch,useSelector}from 'react-redux'
import { Image } from 'react-native';
import logo from '~/imagens/barber.png'
import Background from '~/Componentes/Background';
import{reqAcesso}from '~/store/modulos/auth/actions'


 import {
   Container,
   Form,
   FormInput,
   SubmitButton,
   LinkCConta,
   LinkCContaText
   } from './estilos';

export default function logar({navigation}) {
  const dispatch=useDispatch();
  const senhaRef=useRef();
  const[email,setEmail]=useState('')
  const[senha,setSenha]=useState('')
  const carregando=useSelector(state=>state.auth.carregando)
  const logado=useSelector(state=>state.auth.logado)
  console.tron.log(`carregando=${carregando}, logado=${logado}`)
  function enviaDados()
  {

    dispatch(reqAcesso(email,senha))
  }
  return (
    <Background>
      <Container>
      <Image source={logo}/>
      <Form>
          <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCaptalize="none"
          placeholder="digite o email"
          returnKeyType="next"
          onSubmitEditing={()=>{senhaRef.current.focus()}}
          value={email}
          onChangeText={setEmail}
          />

          <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="digite a senha"
          ref={senhaRef}
          returnKeyType="send"
          onSubmitEditing={enviaDados}
          value={senha}
          onChangeText={setSenha}/>
          <SubmitButton loading={carregando} onPress={enviaDados}>Acessar</SubmitButton>
        </Form>
        <LinkCConta onPress={()=>{navigation.navigate('CriarConta')}}>
        <LinkCContaText>Criar conta gratuita</LinkCContaText>
        </LinkCConta>

      </Container>
    </Background>
  );
}
