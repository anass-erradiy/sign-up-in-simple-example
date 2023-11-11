import React from 'react'
import { Button, Checkbox, Form, Input, Col, Row} from 'antd';
import { Link ,useLocation} from 'react-router-dom';

const FormG = ({enterLoading,loadings,contextHolder,buttonState}) => {
    const path = useLocation() ;
    const currentPath = path.pathname ;
    return (
        <>
        {
            currentPath === '/' ?
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
                        {contextHolder}
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
                : 
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
                                message: 'Please input your name!',
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
                        loading={buttonState}
                        
                        block style={{ height: "40px", margin: '25px 0 5px', fontSize: '0.9375rem' }}>
                        Sign Up
                        </Button>
                    </Form.Item>
                    </div>
                </Form>
        }
        </>
    )
}
export default FormG ;