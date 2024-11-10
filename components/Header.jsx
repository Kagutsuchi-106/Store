import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import colors from '../scripts/colors'
import ButtonImage from '../assets/images/backButton.png'
import HeartImage from '../assets/images/heart.png'



const Header = () => {
  return (
    <View style={styles.header}>

      <TouchableOpacity  style={styles.backButton} >
          <Image 
            source={ButtonImage}
            style={styles.backButtonImage}
            />
      </TouchableOpacity>


      <View style={styles.donationContainer}>
        <View>
          <Text style={styles.titleDonationContainer}>Donation Name</Text>
          <Text style={styles.subtitleDonationContainer}>Compaign</Text>
        </View>

        <View>

          <Image 
            source={HeartImage}
            style={styles.HeartImage}
          />
        </View>

      </View>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    height: 158,
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical:30,
    backgroundColor: colors.secondaryBackground,
  },

  backButton: {
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    width:'100%',
    height:24,
    marginBottom:18,
  },
 
  backButtonImage:{
    width:15,
    height:24,
  },
  
  donationContainer:{
    width:'100%',
    flexDirection:"row",
    justifyContent:"space-between"
  },

  titleDonationContainer:{
    fontWeight:'600',
    fontSize:24,
    letterSpacing:0.8,
    color: colors.titleColor
  },

  subtitleDonationContainer:{
    fontSize:18,
    letterSpacing:0.8,
    color: colors.subtitleColor,
  },
  
  HeartImage:{
    width:30,
    height:30,
  },
})