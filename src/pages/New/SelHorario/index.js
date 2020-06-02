import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Fundo from '~/Componentes/Background'
import CampoData from '~/Componentes/CampoData'
import { Container } from './estilos';


export default function SelHorario(){
  const[data,setData]=useState(new Date())
  return (
          <Fundo>
              <Container>
                <CampoData data={data} onChange={setData}/>
            </Container >
          </Fundo>
          );
}

SelHorario.navigationOptions=({navigation})=>({
  title:'Selecione o Horario',
  headerLeft:()=>(
    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
    <Icon name='chevron-left'size={20} color="#fff"/>
    </TouchableOpacity>)
})
