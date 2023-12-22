import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BookBtn = ({color,title,onPress,selectedDates}) => {

    const formatDateString = (inputDateString) => {
        const inputDate = new Date(inputDateString);
        if (isNaN(inputDate)) {
          return null; // Invalid date string
        }
        const options = { month: 'short', day: 'numeric' };
        return inputDate.toLocaleDateString(undefined, options);
    }

    const printDate = (selectedDates)=>{
        const start = selectedDates?.selectedStartDate ? formatDateString(selectedDates?.selectedStartDate) : ""
        const end = selectedDates?.selectedEndDate ? formatDateString(selectedDates?.selectedEndDate) : ""
        if(start && !end){
            return`${start}`
        }else if (start && end){
            return`${start} - ${end}`
        }
    }
    
    
    return (
    <View style={styles.container}>
        <View style={[styles.rowAlign, {justifyContent: 'space-between'}]}>
            <View>
                <Text>{printDate(selectedDates)}</Text>
                {!selectedDates?.selectedStartDate ? <Text>Rate</Text> : null}
                <Text style={styles.rateStyles}>$1200 /day</Text>
            </View>
            <View>
                <TouchableOpacity style={[styles.bookNowBtn, {backgroundColor: color}]} onPress={onPress}>
                <Text style={{
                    color: '#fff',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 16
                }}>
                    {title ? title : "Book Now"}
                </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </View>
  )
}

export default BookBtn

const deviceWidth = Math.round(Dimensions.get('window').width)
// const deviceheight = Math.round(Dimensions.get('window').height)

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width: deviceWidth - 40,
        left: 20,
        bottom: 10
    },
    rowAlign:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonWidth:{
        width : deviceWidth/2 - 20
    },
    bookNowBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#005E54',
        paddingVertical: 10,
        borderRadius: 10,
        width : deviceWidth/2 - 20,
    },
    rateStyles:{
        color: '#005E54',
        fontSize: 15,
        fontFamily: 'Poppins-Bold',
    }
})