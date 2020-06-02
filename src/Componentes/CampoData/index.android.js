import React, { useMemo, useState } from 'react';
import {  DatePickerAndroid } from 'react-native';

import {format} from 'date-fns';
import pt from 'date-fns/locale/pt'
import Icon from 'react-native-vector-icons/MaterialIcons'

 import { Container,DateButton,DataTexto } from './estilos';


export default function CampoData({date,onChange}){
  async function abreCalendario(){
   const {action,year, month,day} =await DatePickerAndroid.open({
      mode: 'spinner',
      data
    })
    if(action===DatePickerAndroid.dateSetAction){
      const dataSelecionada= new Date(year,month,day)
      onChange(dataSelecionada);
    }
  }
  const[data,setData]=useState(new Date())
  const dataFormatada=useMemo(
    ()=>{
      ()=>format(data,"dd 'de' MMM 'de' yyyy",{locale:pt}),[data]
    }
  )
  return (
    <Container>
        <DateButton onPress={abreCalendario}>
          <Icon name="event"color="#fff"size={20}/>
          <DataTexto>{dataFormatada}</DataTexto>
        </DateButton>
    </Container>
    );
}
