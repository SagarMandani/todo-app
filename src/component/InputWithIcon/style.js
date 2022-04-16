/**
 * Common styles for TextBox Component
 */

 import { StyleSheet, Platform } from 'react-native';

 export default StyleSheet.create({
     container: {
         backgroundColor: 'rgb(231, 231, 235)',
         height: 48,
         width: '100%',
         flexDirection: 'row',
         alignItems: 'center',
         padding: 15,
         borderRadius: 10
     },
     container2: {
         backgroundColor: 'rgb(231, 231, 235)',
         height: 48,
         width: '100%',
         flexDirection: 'row',
         alignItems: 'center',
         paddingLeft: 15,
         paddingRight: 15,
         borderRadius: 10
     },
     iconView: {
         justifyContent: 'center',
         alignItems: 'center',
         paddingLeft: 10,
         paddingRight: 10,
     },
     icon: {
         width: 20,
         height: 20,
         tintColor: '#000'
     },
     textInput: {
         flex: 1,
         color: '#000',
         fontSize: 15,
     }
 });