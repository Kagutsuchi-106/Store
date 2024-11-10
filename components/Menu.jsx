import { StyleSheet, Text, View ,Image ,TouchableOpacity} from 'react-native'
import colors from '../scripts/colors'
import React from 'react'
import crestic from '../../assets/images/crestic.png'
import home from '../../assets/images/home.png'
import search from '../../assets/images/search.png'
import like from '../../assets/images/like.png'
import setings from '../../assets/images/setings.png'



const Menu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
         <Image source={home} style={styles.buttonHome}/>
      </TouchableOpacity>

      <TouchableOpacity>
         <Image source={search} style={styles.buttonSearch}/>
      </TouchableOpacity>   

      <TouchableOpacity style={styles.buttonAdd}>
            <Image source={crestic} 
               style={{
               width:25,
               height:25,}}/>
      </TouchableOpacity>


      <TouchableOpacity>
         <Image source={like} style={styles.buttonLike}/>
      </TouchableOpacity>   
      <TouchableOpacity>
         <Image source={setings} style={styles.buttonSetting}/>
      </TouchableOpacity>   
     
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
   container:{
      height:90,
      width:"100%",
      flexDirection:'row',
      backgroundColor: colors.primaryBackground,
      paddingHorizontal:20,
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:58,
   },
   buttonHome:{
      width:30,
      height:30,
      marginRight:12,

   },
   buttonSearch:{
      width:30,
      height:30,

   },

   buttonAdd:{
      backgroundColor: colors.buttonBackground,
      width:70,
      height:70,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:50,
      marginHorizontal:44

   },
   buttonLike:{
      width:30,
      height:30,
      marginRight:12,

   },
   buttonSetting:{
      width:30,
      height:30,

   }


})