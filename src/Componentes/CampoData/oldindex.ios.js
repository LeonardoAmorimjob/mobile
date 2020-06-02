import React, { useState, useMemo } from 'react';
import {DatePickerIOS } from 'react-native';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt'
import Icon from 'react-native-vector-icons/MaterialIcons'
 import { Container, DateButton,DataTexto,Picker } from './styles';


export default function CampoData({data,onchange}){
  const dataFormatada=useMemo(
    ()=>{
      ()=>format(data,"dd 'de' MMM 'de' yyyy",{}),[data]
    }
  )

  const [livre,setLivre]=useState(false);
  return <Container>
    <DateButton onPress={()=>setLivre(!livre)}>
      <Icon name="event"color="#fff" size={20}/>

        <DataTexto>{dataFormatada}</DataTexto>

    </DateButton>
    {livre&&(
      <Picker>
    <DatePickerIOS
    date={data}
    onDateChange={onChange}
    minimumDate={new Date()}
    minuteInterval={60}
    locale="pt"
    mode="date"
    />
    </Picker>)}
  </Container>;
}
