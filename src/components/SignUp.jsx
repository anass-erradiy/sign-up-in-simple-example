import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Col, Row, Typography, Space, Spin ,message } from 'antd';
import '../assets/css/singnInUp.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [loading, setLoading] = useState(true);
  const [loadings, setLoadings] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigation = useNavigate() ;
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Your account has been created successfully',
      duration: 3,
    });
    setTimeout(() => {
      navigation('/')
    },2500)
  };
  const enterLoading = (e) => {
    setLoadings(true);
    setTimeout(() => {
      setLoadings(false);
      success()
    }, 1500);
    e.preventDefault()
  };
  const { Text, Title } = Typography;
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
      
    }, 500);
  }, [])
  return (
    <div className='form'>
      <Spin spinning={loading}>
        <div>
          <img
            alt="logo"
            fetchpriority="high"
            width={174}
            height={70}
            decoding="async"
            data-nimg={1}
            src="https://modernize-nextjs.adminmart.com/images/logos/dark-logo.svg"
            style={{ color: 'transparent' }}
          />
        </div>
        <Space style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
          <Button style={{ fontSize: "16px" }}>
            <img
              alt="icon"
              width={15}
              height={15}
              src="https://modernize-nextjs.adminmart.com/images/svgs/google-icon.svg"
              style={{ marginRight: '8px', verticalAlign: 'middle' }}
            />Sign in with Google
          </Button >
          <Button style={{ fontSize: "16px" }} >
            <img
              alt="icon"
              width={25}
              height={25}
              src="https://modernize-nextjs.adminmart.com/images/svgs/facebook-icon.svg"
              style={{ marginRight: '8px', verticalAlign: 'middle' }}
            />Sign in with FB
          </Button>
        </Space>
        <div><Text style={{ fontSize: '1.1rem' }}>Or sign up with </Text></div>
        <Form
          onFinish={enterLoading}
          layout="vertical"
          name="basic"
          labelCol={{ span: 8 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <div>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Name"
                  style={{ fontWeight: 600, margin: '25px 0 5px' }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!',
                    },
                  ]}
                  name="name">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="EmailAdress"
                  style={{ fontWeight: 600, margin: '25px 0 5px' }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your emailAdress!',
                    },
                    {
                      type : 'email' ,
                      message : 'please enter an email !'
                    } ,
                  ]}
                  name="EmailAdress">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item
                  label="Password"
                  rules={[
                    {
                      required: true,
                      min : 8
                    },
                  ]}
                  style={{
                    fontWeight: 600,
                    margin: '25px 0 5px'
                  }}
                  name="password">

                  <Input.Password />
                </Form.Item>
              </Col>
            </Row>

          </div>
          <div>
            <Form.Item>
              {contextHolder}
              <Button type="primary" 
              htmlType="submit" 
              loading={loadings}
              
              block style={{ height: "40px", margin: '25px 0 5px', fontSize: '0.9375rem' }}>
                Sign Up
              </Button>
            </Form.Item>
          </div>
        </Form>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '8px' }}>
          <Text style={{ fontSize: '1.1rem', fontWeight: 600, marginRight: '8px' }}>Already have an Account?</Text>
          <Link to='/'> Sign in</Link>
        </div>
      </Spin>
    </div>
  )
}

export default SignUp;