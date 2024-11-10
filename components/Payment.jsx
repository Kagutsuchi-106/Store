import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../scripts/colors'
import React from 'react'

const Payment = () => {
  return (
   <View style={styles.paymentContainer}>

      <Text style={styles.paymentTitle}>Payment method</Text>
      <View style={styles.paymentItemContainer}>
         <TouchableOpacity style={styles.paymentItem}> 
            <Text style={styles.paymentItemPrice}>Credit</Text>
            <Text style={styles.paymentItemPrice}>card</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.paymentItem}> 
            <Text style={styles.paymentItemPrice}>Bank</Text>
            <Text style={styles.paymentItemPrice}>transfer</Text>
         </TouchableOpacity>
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
      fontSize:18,
      color: colors.primaryText,
      fontFamily: 'Roboto',
      marginBottom:26,
   },

   paymentItemContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      height:74,
      width:'100%',
   },

   paymentItem:{
      backgroundColor:colors.buttonBackground,
      width:'45%',
      height:'100%',
      borderRadius:50,
      paddingHorizontal:'10%',
      alignItems:'center',
      justifyContent:'center',
   },

   paymentItemPrice:{
      color:colors.buttonText,
      fontSize:20,
      fontWeight:'400',
      alignItems:'center',
      justifyContent:"center",
      letterSpacing:0.6,
   },
 
})