import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../scripts/colors'

const SelectPrice = () => {
  return (
    <View style={styles.selectContainer}>
      <Text style={styles.selectTitle}>Select amount</Text>
      <View style={styles.selectItemContainer}>
            <TouchableOpacity style={styles.selectItem}>
               <View style={styles.selectItemIconBackground}>
                  <Text style={styles.selectItemIcon}>$</Text>
               </View>
               <Text style={styles.selectItemPrice}>$10.00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.selectItem}>
               <View style={styles.selectItemIconBackground}>
                  <Text style={styles.selectItemIcon}>$</Text>
               </View>
               <Text style={styles.selectItemPrice}>$20.00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.selectItem}>
               <View style={styles.selectItemIconBackground}>
                  <Text style={styles.selectItemIcon}>$</Text>
               </View>
               <Text style={styles.selectItemPrice}>$30.00</Text>
            </TouchableOpacity>         

      </View>
      

    </View>
  )
}

export default SelectPrice

const styles = StyleSheet.create({
   selectContainer:{
      width:'100%',
   },

   selectTitle:{
      fontSize:18,
      color: '#edc8f8',
      fontFamily: 'Roboto',
      marginBottom:26,
   },

   selectItemContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      height:104,
      width:'100%',
   },

   selectItem:{
      backgroundColor:colors.buttonBackground,
      width:105,
      height:'100%',
      borderRadius:30,
      alignItems:'center',
      justifyContent:'center',
   },

   selectItemIconBackground:{
      width:42,
      height:42,
      marginBottom:6,
      backgroundColor:colors.iconColor,
      alignItems:"center",
      justifyContent:'center',
      borderRadius:50,
      marginHorizontal:32,
   },

   selectItemIcon:{
      color:colors.buttonText,
      fontSize:30,
      fontWeight:'400',
   },

   selectItemPrice:{
      color:colors.buttonText,
      fontSize:15,
      fontWeight:'800',
      letterSpacing:0.5,
      paddingHorizontal:25,
   },


})