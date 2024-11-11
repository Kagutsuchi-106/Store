
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import colors from '../scripts/colors';

const SelectPrice = () => {
  // Состояние для отслеживания выбранной суммы
  const [selectedAmount, setSelectedAmount] = useState(null);

  // Обработчик для выбора суммы
  const handleSelectAmount = (amount) => {
    setSelectedAmount(amount); 
  };

  return (
    <View style={styles.selectContainer}>
      <Text style={styles.selectTitle}>Select amount</Text>
      <View style={styles.selectItemContainer}>
        
        {['$10.00', '$20.00', '$30.00'].map((price, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.selectItem,
              selectedAmount === price && styles.selectItemSelected 
            ]}
            onPress={() => handleSelectAmount(price)} 
          >
            <View style={styles.selectItemIconBackground}>
              <Text style={styles.selectItemIcon}>$</Text>
            </View>
            <Text style={styles.selectItemPrice}>{price}</Text>
          </TouchableOpacity>
        ))}

      </View>
    </View>
  );
};

export default SelectPrice;

const styles = StyleSheet.create({
  selectContainer: {
    width: '100%',
  },
  selectTitle: {
    fontSize: 20,
    color: '#edc8f8',
    marginBottom: 26,
  },
  selectItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 104,
    width: '100%',
  },
  selectItem: {
    backgroundColor: colors.buttonBackground,
    width: 105,
    height: '100%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectItemSelected: {
   width: 108,
    borderColor:colors.selectedItemBorder,
    borderWidth:3, 
  },
  selectItemIconBackground: {
    width: 42,
    height: 42,
    marginBottom: 6,
    backgroundColor: colors.iconColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginHorizontal: 32,
  },
  selectItemIcon: {
    color: colors.buttonText,
    fontSize: 30,
    fontWeight: '400',
  },
  selectItemPrice: {
    color: colors.buttonText,
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
    paddingHorizontal: 25,
  },
});
