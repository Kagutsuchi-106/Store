

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../scripts/colors'
import React, { useState } from 'react';


const Payment = () => {
   const[selectedMethod,setSelectedMethod]= useState(null)
   const  handleSelectMethod =(method)=>{
      setSelectedMethod(method)

   }

  return (
   <View style={styles.paymentContainer}>

      <Text style={styles.paymentTitle}>Payment method</Text>
      <View style={styles.paymentItemContainer}>

         {['Credit card','Bank transfer'].map((method, index)=>(
            <TouchableOpacity 
               style={[
                  styles.paymentItem,
                  selectedMethod === method && styles.paymentItemSelected]}
               key={index}
               onPress={() => handleSelectMethod(method)} 
            > 
               <Text style={styles.paymentItemMethod}>{method}</Text>
            </TouchableOpacity>

         ))}
        
      </View>
    
    </View>
    
  )
}

export default Payment

const styles = StyleSheet.create({
   paymentContainer:{
      width:'100%',
   },

   paymentTitle:{
      fontSize:20,
      color: colors.primaryText,
      marginBottom:26,
   },

   paymentItemContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      height:74,
      width:'100%',
   },

   paymentItem:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:colors.buttonBackground,
      width:'48%',
      height:'100%',
      borderRadius:50,
      paddingHorizontal:'10%',
      
   },
   paymentItemSelected: {
      borderColor:colors.selectedItemBorder,
      borderWidth:3, 
   },
   paymentItemMethod:{
      color:colors.buttonText,
      fontSize:20,
      fontWeight:'400',
      alignItems:'center',
      justifyContent:"center",
      letterSpacing:0.6,
      textAlign:"center",
   },
 
})