import React from "react";
import { Col, Row, Typography, Space, Form, Button, Input } from "antd";
import { NavLink } from "react-router-dom";
import './logincss.css'

const { Text, Title } = Typography

const Loginpage = () =>{
    return(
        <div className="justify-center pt-5 bg-login">
            <div className="width93">
                <Row gutter={[32,32]}>
                    <Col span={24}>
                        <Title level={2}>Login.</Title>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[16,10]} className='justify-center my-5'>
                            <Col xs={24} sm={24} md={14} lg={7}>
                                <Space direction="vertical" className="w-100 justify-center">
                                    <Space direction="vertical" size={3} className='w-100 text-center'>
                                        <Title level={4} className='m-0 textshadow'>DIVE  INTO THE WORLD OF </Title>
                                        <Title level={2}  className='m-0 textshadow'>DIGITAL MUSIC COLLECTIBLES</Title>
                                    </Space>
                                    <Form layout="vertical">
                                        <Row gutter={[16,16]}>
                                            <Col span={24}>
                                                <Form.Item label='Email' className="fw-500">
                                                    <Input className='w-100 radius-6' size='large' />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} >
                                                <Form.Item label='Password' className="fw-500">
                                                    <Input className='w-100 radius-6' size='large' />
                                                </Form.Item>
                                                <Space direction="vertical" size={0} className='w-100 text-end dim-color'>
                                                    <NavLink to='' className='dim-color fw-500'>Forget Password?</NavLink>
                                                </Space>
                                            </Col>
                                            <Col span={24}>
                                                <Button type="primary" className="w-100 fs-21 text-center commn-btn radius-6">
                                                    LOGIN
                                                </Button>
                                            </Col>
                                            <Col span={24}>
                                                <Space size={5} className='w-100 justify-center'>
                                                    <Text strong>Create one?</Text>
                                                    <NavLink to='' className='dim-color fw-500'>Forget Password</NavLink>
                                                </Space>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Loginpage