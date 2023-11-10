import React from 'react';
import { Button, Checkbox, Form, Input, Col, Row, Typography ,Space} from 'antd';
import '../assets/css/singnInUp.css';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  const { Text, Title } = Typography;

  return (
    <div className='form'>
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
      <div><Text style={{fontSize: '1.1rem'}}>Or sign up with </Text></div>
      <Form
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
                    message: 'Please input your password!',
                  },
                ]}
                style={{
                  fontWeight: 600,
                  margin: '25px 0 5px'
                }}
                name="password">

                <Input />
              </Form.Item>
            </Col>
          </Row>

        </div>
        <div>
          <Form.Item>
            <Button type="primary" htmlType="submit" block style={{ height: "40px", margin: '25px 0 5px', fontSize: '0.9375rem' }}>
              Sign Up
            </Button>
          </Form.Item>
        </div>
      </Form>
      <div style={{ display: 'flex', justifyContent: 'center' ,alignItems: 'center', marginBottom: '8px' }}>
        <Text style={{ fontSize: '1.1rem' ,fontWeight : 600 ,marginRight: '8px'}}>Already have an Account?</Text>
        <Link to='/'> Sign in</Link>
      </div>
    </div>
  )
}

export default SignUp;