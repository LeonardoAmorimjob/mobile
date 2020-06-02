import React,{useEffect,useState} from 'react';
import Fundo from '~/Componentes/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container,ListadePrestador,Nome,Avatar,Prestador } from './estilos';
import api from '~/servicos/api';



export default function SelPrestador({navigation}){
  const[prestadores,setPrestadores]=useState([]);
  useEffect(()=>{
    async function carregaPrestadores(){
      const res= await api.get('prestador')
      setPrestadores(res.data);
      console.tron.log(res.data)
    }
    carregaPrestadores();
  },[]);
  return (
  <Fundo>
    <Container>
      <ListadePrestador
      data={prestadores}
      keyExtractor={prestador=>String(prestador.id)}
      renderItem={({item})=>(
        <Prestador onPress={()=>navigation.navigate('SelHorario',{item})}>
         <Avatar source={{uri:item.avatar?item.avatar.url:`https://api.adorable.io/avatar/50/${item.nome}.png`}}/>
          <Nome>
            {item.nome}
          </Nome>
        </Prestador>
      )}
      />
    </Container>
  </Fundo>);
}

SelPrestador.navigationOptions=({navigation})=>({
  title:'Selecione o Prestador',
  headerLeft:()=>(
  <TouchableOpacity onPress={()=>{navigation.navigate('Dashboard')}}>
  <Icon name='chevron-left'size={20} color="#fff"/>
  </TouchableOpacity>)
})
