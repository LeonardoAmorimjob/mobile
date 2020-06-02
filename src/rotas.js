import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator}from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Logar from './pages/Logar';
import CriarConta from './pages/CriarConta';
import SelPrestador from './pages/New/SelPrestador';
import SelHorario from './pages/New/SelHorario';
import Confirm from './pages//New/Confirm';

import Dashboard from './pages/Dashboard'
import Perfil from './pages/Perfil';


export default (logado=false)=>
createAppContainer(
  createSwitchNavigator({
    InicioLogar:createSwitchNavigator({
      Logar,
      CriarConta,
    }),
    App:createBottomTabNavigator({
     Dashboard,
     New:{
       screen: createStackNavigator({
         SelPrestador,
         SelHorario,
         Confirm
       },{
         defaultNavigationOptions:{
          headerTransparent:true,
          headerTintColor:'#fff',
          headerTitleAlign:'center',
          headerLeftContainerStyle:{
            marginLeft:20,
          }

         }
       }),
       navigationOptions:{
         tabBarVisible:false,
         tabBarLabel:'Agendar',
         tabBarIcon:(<Icon name='add-circle-outline'size={20}color="rgba(255,255,255,0.6)"/>)
       }
     },
     Perfil,
    },{
      tabBarOptions:{
        keyboardHidesTabBar:true,
        activeTintColor:'#fff',
        inactiveTintColor:'rgba(255, 255, 255, 0.6)',
        style:{
          backgroundColor:'#ff66ff'
        }
      }
    })
  },{
initialRouteName:logado?'App':'InicioLogar'
  }),
);
