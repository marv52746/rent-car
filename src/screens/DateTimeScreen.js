
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import BackButton from '../component/BackButton'
import BookBtn from '../component/BookBtn'
import BookDriver from '../component/BookDriver'
import Calendar from '../component/Calendar'
import PickUpTime from '../component/PickUpTime'
import ReturnTime from '../component/ReturnTime'

export default function DateTimeScreen({navigation, route}) {

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE' && selectedStartDate && date >= selectedStartDate) {
      setSelectedEndDate(date);
    } else if (type === 'START_DATE') {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  }

  return (
    <View style={{flex:1, backgroundColor: '#E6EFEE'}}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Date & Time</Text>
        </View>
        <View style={styles.backBtnWrap}>
          <BackButton onPress={()=>navigation.goBack()} />
        </View>
      </View>

      <View style={{padding: 20, marginBottom: 60, paddingBottom: 100}}>
        <BookDriver />
        <Calendar onDateChange={onDateChange}/>
        <View style={{
          flexDirection: 'row', 
          justifyContent: 'space-between',
          marginTop: 50
          }}>
          <PickUpTime />
          <ReturnTime />
        </View>
      </View>
      <BookBtn color={'#005E54'} selectedDates={{selectedStartDate,selectedEndDate}} onPress={()=>navigation.navigate('Payment')} />

    </View>
  )
}


const deviceWidth = Math.round(Dimensions.get('window').width)
const deviceHeight = Math.round(Dimensions.get('window').height)

const styles = StyleSheet.create({
  header:{
    height: 100,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerTitle:{
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
  backBtnWrap:{
    backgroundColor: "#fff",
    position: 'absolute',
    padding: 10,
    top: 50,
    left: 20,
    borderRadius:25,
    borderColor: '#000'
  },
  alignCenter:{
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'center'
  },
  alignCenterRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    width: '70%'
  },
  horizontalRule: {
    borderBottomColor: '#B4BBBA',
    borderBottomWidth: 1,
    marginVertical: 20,
  },

})