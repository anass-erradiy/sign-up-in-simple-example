import React, { useEffect, useState } from 'react';

import { Spin } from 'antd';
import '../assets/css/singnInUp.css';
import Logo from '../assets/images/Logo';
import { Link } from 'react-router-dom';
import Buttons from './forms/Buttons';
import Footer from './forms/Footer';
import FormG from './forms/FormG';

const SignIn = () => {
  const [loading, setLoading] = useState(true);
  const [loadings, setLoadings] = useState(false);

  const enterLoading = () => {
    setLoadings(true);
    setTimeout(() => {
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
        <FormG enterLoading = {enterLoading} loadings={loadings}  />
        <Footer />
      </Spin>
    </div>
  )
}

export default SignIn;