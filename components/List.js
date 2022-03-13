import React from 'react'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import { Modal, StyleSheet, Text, TouchableOpacity, View,Button } from 'react-native'
 

let List = (props) => {

    const {data} = props
    const renderValues = (rData) => {
        let rows = []
        Object.keys(rData).forEach( key => rows.push(
            <Text key={key}>{key + ' : ' + rData[key]}</Text>
        ))
        return  rows
    }

 return (
        
      <Text>{data ? renderValues(data) : null}</Text>
    )
}

List = connect(state => {
     const data = getFormValues('userMessageForm')(state)
    return {data}
})(List)
 

export default List

