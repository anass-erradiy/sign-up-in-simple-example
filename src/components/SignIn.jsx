import React, { useEffect,useState } from 'react';

import { Button, Checkbox, Form, Input, Col, Row, Typography ,Space , Spin ,Flex} from 'antd';
import '../assets/css/singnInUp.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [loading, setLoading] = useState(true);
  const [loadings, setLoadings] = useState(false);
  const enterLoading = () => {
    setLoadings(true);
    setTimeout(() => {
      setLoadings(false);
    }, 1500);
  };
  const { Text, Title } = Typography;
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 500);
  },[])
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
      <Space style={{ display: 'flex', justifyContent: 'center' ,alignItems: 'center', marginBottom: '15px' }}>
        <Button style={{fontSize : "16px"}}>
        <img
          alt="icon"
          width={15}
          height={15}
          src="https://modernize-nextjs.adminmart.com/images/svgs/google-icon.svg"
          style={{ marginRight: '8px' ,verticalAlign: 'middle'}}
        />Sign in with Google
        </Button >
        <Button style={{fontSize : "16px"}} >
        <img
          alt="icon"
          width={25}
          height={25}
          src="https://modernize-nextjs.adminmart.com/images/svgs/facebook-icon.svg"
          style={{ marginRight: '8px' ,verticalAlign: 'middle'}}
        />Sign in with FB
        </Button>
      </Space>
      <div><Text style={{fontSize: '1.1rem'}}>Or sign in with </Text></div>
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
                label="Username"
                style={{ fontWeight: 600, margin: '25px 0 5px' }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
                name="username">
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
                    message: 'Please input your password!',
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
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', margin: '25px 0 5px' }}>
            <Checkbox style={{ fontSize: 15 }}>Remember this Device</Checkbox>
            <Link style={{ fontSize: 15 }}>Forgot password ?</Link>
          </div>
        </div>
        <div>
          <Form.Item>
            <Button type="primary" 
              htmlType="submit" 
              block style={{ height: "40px", margin: '25px 0 5px', fontSize: '0.9375rem' }}
              loading={loadings}
              >
              Sign In
            </Button>
          </Form.Item>
        </div>
      </Form>
      <div style={{ display: 'flex', justifyContent: 'center' ,alignItems: 'center', marginBottom: '8px' }}>
        <Text style={{ fontSize: '1.1rem' ,fontWeight : 600 ,marginRight: '8px'}}>New to Modernize?</Text>
        <Link to='/signUp'> Create an account</Link>
      </div>
      </Spin>

    </div>
  )
}

export default SignIn;