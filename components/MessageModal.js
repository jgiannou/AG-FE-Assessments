import React from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import { Modal, StyleSheet, Text, TouchableOpacity, View,Button } from 'react-native'
import styles from './MessageModal.scss';
import { BlurView } from 'expo-blur';

let MessageModal = (props) => {

    const { data } = props
    
    const renderSubmittedData = (submittedData) => {
        let rows = []
        Object.keys(submittedData).forEach( key => rows.push(
            <Text key={key} style={styles.row}>{key + ' : ' + submittedData[key]}</Text>
        ))
        return  rows
    }

    return (
        
        <Modal
            animationType="fade"
            visible={props.visible}
            transparent={true}
            onDismiss={props.resetFn}
        >
                 
            <TouchableOpacity activeOpacity={1} onPress={props.closeModal} style={styles.modalScreen}>
            <BlurView intensity={60} tint="dark" style={styles.blurContainer} >   
                <TouchableOpacity activeOpacity={1} style={styles.modalBox}>
                    <Text> 
                        Your Submitted Data 
                    </Text>    
                   
                    {data ? renderSubmittedData(data) : null}
                    
                    <View>
                        <Button 
                            title={'Okay'}
                            onPress={props.closeModal}
                        />
                    </View>

                </TouchableOpacity>
               </BlurView>
            </TouchableOpacity>   
         </Modal>
    )
}

const selector = formValueSelector('userMessageForm')

MessageModal = connect(state => {
    const data = selector(state,'Username','Message')
    
    return {data}
})(MessageModal)

export default MessageModal

