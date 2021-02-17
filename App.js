import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import IssueScreen from './screens/issue'
import SearchScreen from './screens/search'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
  return (
    <Appcontainer/>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const tabnavigator = createBottomTabNavigator({
  Issue:{screen:IssueScreen},
  Search:{screen:SearchScreen},
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const rootname=navigation.state.routeName
if(rootname==='Issue'){
return(
  <Image source={require("./assets/book.png")}
  style={{width:40,height:40}} />

  
)
}

else if(rootname==='Search'){
  return(
    <Image source={require("./assets/searchingbook.png")}
    style={{width:40,height:40}} />
  
    
  )
  }

    }
  })

}
)

const Appcontainer = createAppContainer(tabnavigator)












