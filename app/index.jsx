import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Header from '../components/navigation/Header'
import SelectPrice from '../components/navigation/SelectPrice'
import Payment from '../components/Payment'
import Menu from '../components/navigation/Menu'
import colors from '../scripts/colors'
import React from 'react'

const index = () => {
  return (
  <>
  <View style={{
      height:'100%',
      backgroundColor: colors.primaryBackground,
  }}>
    <Header/>
    <View style={styles.container}>
      <SelectPrice/>
      <Payment/>
      <TouchableOpacity style={styles.donateButton}><Text style={
          {color:colors.donateButton,
          fontSize:20,
          fontWeight:"500"
        }
        }>Donate</Text>
        </TouchableOpacity>
      <View style={{
          backgroundColor:'white',
          width:"100%",
          height:3,
        }}/>
    </View>
    <Menu/>
  </View>
 

</>
    
    
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
    paddingHorizontal:28,
    
    backgroundColor: colors.primaryBackground,


  },
  donateButton:{
    width:'100%',
    height:78,
    backgroundColor:'white',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
   
    
 },
  
})