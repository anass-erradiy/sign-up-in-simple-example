import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Col, Row, Spin ,message } from 'antd';
import '../assets/css/singnInUp.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo';
import Buttons from './forms/Buttons';
import Footer from './forms/Footer';
import FormG from './forms/FormG';
import { useDispatch, useSelector } from "react-redux";


const SignUp = () => {
  const [loading, setLoading] = useState(true);
  const [buttonState, setButtonState] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigation = useNavigate() ;
  useEffect(() => {
    // Change the title
    document.title = 'Sign up page';
  },[])
  // show success message
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Your account has been created successfully',
      duration: 3,
    });
    // redirect to the home signIn page
    setTimeout(() => {
      navigation('/')
    },2500)
  };
  // spin button and after 1.5s call success() to show success message
  const enterLoading = (e) => {
      const user = {
      username : e.username ,
      emailAdress : e.EmailAdress ,
      password : e.password
    } ;
    dispatch({type:"add_user" ,payload : user}) ;
    setButtonState(true);
    setTimeout(() => {
      setButtonState(false);
      success()
    }, 1500);
  };

  // show spin once the page loaded
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 500);
  }, [])
  return (
    <div className='form'>
      <Spin spinning={loading}>
        <Logo/>
        <Buttons/>
        <FormG contextHolder={contextHolder} buttonState={buttonState} enterLoading={enterLoading}/>
        <Footer/>
      </Spin>
    </div>
  )
}

export default SignUp;