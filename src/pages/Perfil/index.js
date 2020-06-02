import React,{useRef,useState, useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';

import Icon  from 'react-native-vector-icons/MaterialIcons';

import Fundo from '~/Componentes/Background';
import {reqAtualizaPerfil}from '~/store/modulos/usuario/actions'
import {sair}from '~/store/modulos/auth/actions'

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Titulo,
  Separator,
  SairButton
  } from './estilos';



export default function Perfil(){
  const dispatch=useDispatch();
  const perfil=useSelector(state=>state.usuario.perfil)
  const [email,setEmail]=useState(perfil.email);
  const [senhaAntiga,setSenhaAntiga]=useState('');
  const [senha,setSenha]=useState('');
  const [confirSenha,setConfirSenha]=useState('');
  const [nome,setNome]=useState(perfil.nome);
  const emailRef=useRef();
  const senhaAntigaRef=useRef();
  const senhaRef=useRef();
  const confirSenhaRef=useRef();
  const carregando=useSelector(state=>state.auth.carregando)
  useEffect(()=>{
    setSenhaAntiga(''),
    setSenha(''),
    setConfirSenha('')
  },[perfil]);
  function enviaDados(){

    dispatch(reqAtualizaPerfil({
      nome,
      email,
      senhaAntiga,
      senha,
      confirSenha
    }))
}
function sairApp(){
dispatch(sair())

}

  return (
    <Fundo>
        <Container>
          <Titulo>
            Meu Perfil
          </Titulo>
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
          onSubmitEditing={()=>{senhaAntigaRef.current.focus()}}
          value={email}
          onChangeText={setEmail}/>
          <Separator/>
          <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="digite a senha antiga"
          returnKeyType="next"
          ref={senhaAntigaRef}
          onSubmitEditing={()=>{senhaRef.current.focus()}}
          value={senhaAntiga}
          onChangeText={setSenhaAntiga}/>
          <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="digite a senha nova"
          returnKeyType="next"
          ref={senhaRef}
          onSubmitEditing={()=>{confirSenhaRef.current.focus()}}
          value={senha}
          onChangeText={setSenha}/>
          <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="digite a senha"
          returnKeyType="send"
          ref={confirSenhaRef}
          onSubmitEditing={enviaDados}
          value={confirSenha}
          onChangeText={setConfirSenha}/>
          <SubmitButton loading ={carregando}onPress={enviaDados}>Atualizar Dados</SubmitButton>
          <SairButton onPress={sairApp}>Sair</SairButton>
        </Form>
        </Container>
    </Fundo>);
}

Perfil.navigationOptions={
  tabBarLabel:'Perfil',
  tabBarIcon:({tintColor})=>(
    <Icon name="person" size={20}color={tintColor}/>
  )
}
