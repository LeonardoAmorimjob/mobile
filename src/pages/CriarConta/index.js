import React,{useRef,useState} from 'react';
import{useDispatch,useSelector}from'react-redux'
import logo from '~/imagens/barber.png'
import { Image } from 'react-native';
import Background from '~/Componentes/Background';
import{reqCadastro}from '~/store/modulos/auth/actions'


 import {
   Container,
   Form,
   FormInput,
   SubmitButton,
   LinkCConta,
   LinkCContaText
   } from './estilos';

export default function criarConta({navigation}) {
  const [email,setEmail]=useState('');
  const [senha,setSenha]=useState('');
  const [nome,setNome]=useState('');
  const carregando=useSelector(state=>state.auth.carregando)

  const dispatch=useDispatch();
  const emailRef=useRef();
  const senhaRef=useRef();
  function enviaDados(){
      dispatch(reqCadastro(nome,email,senha))
  }

  return (
    <Background>
      <Container>
      <Image source={logo}/>
      <Form>
         <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCaptalize="none"
          placeholder="digite o nome completo"
          returnKeyType="next"
          onSubmitEditing={()=>{emailRef.current.focus()}}
          value={nome}
          onChangeText={setNome}
          />

          <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCaptalize="none"
          placeholder="digite o email"
          returnKeyType="next"
          ref={emailRef}
          onSubmitEditing={()=>{senhaRef.current.focus()}}
          value={email}
          onChangeText={setEmail}/>

          <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="digite a senha"
          returnKeyType="send"
          ref={senhaRef}
          onSubmitEditing={enviaDados}
          value={senha}
          onChangeText={setSenha}/>
          <SubmitButton loading ={carregando}onPress={enviaDados}>Criar Conta</SubmitButton>
        </Form>
        <LinkCConta onPress={()=>{navigation.navigate('Logar')}}>
        <LinkCContaText>Ja sou cadastrado</LinkCContaText>
        </LinkCConta>

      </Container>
    </Background>
  );
}
