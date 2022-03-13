import React , {useState} from 'react';
import { View, Button, TextInput, Text, TouchableOpacity } from 'react-native';
import { Field,reduxForm,formValueSelector,getFormValues } from 'redux-form';
import {connect} from "react-redux";
import MessageModal from './MessageModal';
import styles from './Form.scss'

   

const Form = (props) => {

    const[open,setOpen] = useState(false);

    const {handleSubmit} = props;

    const onSubmit = (values) => {
        console.log(values);
        setOpen(true)
    }

    const closeModalHandler = () => {
        props.reset()
        setOpen(false)
    }
  
    const inputComponent =({input : {onChange,...input},...rest})=>{
        return <TextInput style={styles.input} onChangeText={onChange} {...input} {...rest}/>  }

   return (
    <View style={styles.form}>
      <Field
        style={styles.input}
        name="Username"
        placeholder="Username"
        component={inputComponent}
      />
      <Field
        name='Message'
        placeholder="Message"
        style={styles.inputMessage}
        component={inputComponent}
      />
      <TouchableOpacity style={styles.buttonSubmit}>
      <Button 
      title={'Submit'}
      onPress={handleSubmit(onSubmit)}
      />
      </TouchableOpacity>
      <MessageModal visible ={open} closeModal={closeModalHandler}/>
     
     </View>
      
  );
};


export default reduxForm({form: 'userMessageForm'})(Form);