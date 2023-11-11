import React, { useEffect, useState } from 'react';

import { Spin,message } from 'antd';
import '../assets/css/singnInUp.css';
import Logo from '../assets/images/Logo';
import {useNavigate } from 'react-router-dom';
import Buttons from './forms/Buttons';
import Footer from './forms/Footer';
import FormG from './forms/FormG';
import { useSelector } from 'react-redux';

const SignIn = () => {
  const [loading, setLoading] = useState(true);
  const [loadings, setLoadings] = useState(false);
  const [loginFlage, setLoginFlage] = useState(false);
  const [user ,setUser] = useState() ;
  const users = useSelector((data) => data.users);
  const [messageApi, contextHolder] = message.useMessage();
  const navigation = useNavigate() ;


  const key = 'updatable';
  const enterLoading = (e) => {
    const foundedUser = users.find(user => user.username === e.username)
    messageApi.open({
      key,
      type:'loading',
      content: 'Loging...',
    });
    setLoadings(true);
    setTimeout(() => {
      if(foundedUser && foundedUser.password === e.password){

        messageApi.open({
          key,
          type: 'success',
          content: 'Login with Success',
          duration: 2,
        })
        setTimeout(() => {
          navigation('/home',{ state: { user: foundedUser } })
        },2000)
      }
      else 
        messageApi.open({
          key,
          type: 'error',
          content: 'Incorrect Username or Password !',
          duration: 2,
        })
      setLoadings(false);
    }, 1500);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 500);
  }, [])
  return (
    <div className='form'>
      <Spin spinning={loading}>
        <Logo />
        <Buttons />
        <FormG enterLoading = {enterLoading} loadings={loadings}  contextHolder ={contextHolder}/>
        <Footer />
      </Spin>
    </div>
  )
}

export default SignIn;