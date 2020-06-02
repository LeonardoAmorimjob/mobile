import React, { useState } from 'react';
import {useSelector}from 'react-redux'
import CriarRotas from './rotas';

// import { Container } from './styles';

export default function App(){
  const logado=useSelector(state=>state.auth.logado)
  const Rotas=CriarRotas(logado)
  return <Rotas />;
}

