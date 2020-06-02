import React,{useEffect,useState} from 'react';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import api from '~/servicos/api';
import {Container,Titulo,List }from './estilos'
import Fundo from '~/Componentes/Background'
import Agendamentos from '~/Componentes/Agendamentos'
export default function Dashboard(){
const [agendamentos,setAgendamentos]=useState([]);
  useEffect(()=>{
    async function carregaAgendamentos(){
      const res=await api.get('agendamentos')

      setAgendamentos(res.data);
   }
    carregaAgendamentos();
  },[]);
  async function cancelaAgendamento(id){
    console.tron.log(id);
    const res=await api.put(`agendamentos/${id}`);
    console.tron.log(res);
      setAgendamentos(agendamentos.map(agendamento=>
        agendamento.id===id?{
          ...agendamento,
          canceled_at:res.data.canceled_at,}:agendamento))


  }


  return(
  <Fundo >
    <Container>
      <Titulo>
        Agendamentos
      </Titulo>

      <List

      data={agendamentos}
      keyExtractor={item=>String(item)}
      renderItem={({item})=>(

        <Agendamentos
          onCancel={()=>cancelaAgendamento(item.id)}
          dados={item}
        />
      )}
      />
    </Container>
  </Fundo>
  );
}

Dashboard.navigationOptions={
  tabBarLabel:'Agendamentos',
  tabBarIcon:({tintColor})=>(
    <Icon name="event" size={20}color={tintColor}/>
  )
}
