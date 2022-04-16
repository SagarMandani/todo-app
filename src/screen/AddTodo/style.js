import { StyleSheet, Platform } from 'react-native'

/*
* AddToDo screen style
*/

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
    },
    flexOne: {
        flex: 1
    },
    marginBottom20: {
        marginBottom: 20
    },
    boxContainer: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    normalText: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    datePickerStyle: {
        backgroundColor: 'rgb(231, 231, 235)',
        height: 48,
        borderRadius: 10,
        width: '100%',
    },
    iosDropUpDownStyle: {
        backgroundColor: 'rgb(231, 231, 235)',
        height: 48,
        width: '100%',
        padding: 15,
        borderRadius: 10,
    },
    androidDropUpDownStyle: {
        backgroundColor: 'rgb(231, 231, 235)',
        height: 48,
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10
    },
    dateInputView: {
        borderWidth: 0,
        top: 4
    },
    dateIconView: {
        right: 10,
        top: 15,
        position: 'absolute',
        width: 18,
        height: 18,
        tintColor: 'rgba(34, 34, 34, 0.3)'
    },
    dateTxt: {
        color: 'rgba(34, 34, 34, 0.3)',
        fontSize: 15,
        position: 'absolute',
        left: 15
    },
    timeView: {
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    startTimeView: {
        flex: 1, marginRight: 5
    },
    timeIconStyle: {
        position: 'absolute',
        width: 20,
        height: 20,
        tintColor: 'rgba(34, 34, 34, 0.3)'
    },
    endTimeView: {
        flex: 1, marginLeft: 5
    },
    pickerView: {
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20
    }
});

export default styleSheet;