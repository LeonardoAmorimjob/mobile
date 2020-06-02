import React,{useMemo} from 'react';
import { TouchableOpacity } from 'react-native';
import{parseISO,formatRelative}from 'date-fns';
import pt from 'date-fns/locale/pt'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container,Left,Avatar,Info,Nome,Horario } from './estilos';

export default function Agendamentos({dados,onCancel}) {



  const convdata=useMemo(()=>{
return formatRelative(parseISO(dados.data),new Date(),{
  locale:pt,
  addSufix:true
})
  },[dados.data])

  return(
  <Container past={dados.past}>
      <Left>
        <Avatar source={{uri:dados.prestador.avatar?dados.prestador.avatar.url:'https://api.adorable.io/avatar/50/rocketseat.png'}}/>
        <Info>
            <Nome>
               {dados.prestador.nome}
            </Nome>
            <Horario>
               {convdata}
            </Horario>
        </Info>

      </Left>
     {dados.cancelavel&&(!dados.canceled_at)&&(<TouchableOpacity onPress={onCancel}>
        <Icon name='event-busy'size={20}color="#f64cf5"/>
      </TouchableOpacity>)}
  </Container>
  );
}

