import React from 'react'
import { Col, Row, Space, Form, Button, Input, Image } from "antd";

const SettingsForm = () => {
  return (
    <div>
        <Row gutter={[16,10]} className='justify-center my-5'>
            <Col xs={24} sm={24} md={14} lg={10}>
                <Space direction="vertical" className="w-100 justify-center">
                    <div direction="vertical" size={3} className='w-100 text-center maindiv'>
                        <Image src='/assets/img/signup-img.png' preview={false} width={'150px'} />
                        <div className='editbtn'>
                            <Image src='/assets/img/editpen.svg' preview={false} />
                        </div>
                    </div>
                    <Form layout="vertical">
                        <Row gutter={[16,16]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item label='First name' className="fw-500">
                                    <Input className='w-100 radius-6' size='large' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item label='Last name' className="fw-500">
                                    <Input className='w-100 radius-6' size='large' />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label='Date of birth' className="fw-500">
                                    <Input className='w-100 radius-6' size='large' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item label='Username' className="fw-500">
                                    <Input className='w-100 radius-6' size='large' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item label='Phone' className="fw-500">
                                    <Input className='w-100 radius-6' size='large' />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label='Email' className="fw-500">
                                    <Input className='w-100 radius-6' size='large' />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label='Password' className="fw-500">
                                    <Input className='w-100 radius-6' size='large' />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label='Address' className="fw-500">
                                    <Input className='w-100 radius-6' size='large' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item label='Zipcode' className="fw-500">
                                    <Input className='w-100 radius-6' size='large' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item label='City' className="fw-500">
                                    <Input className='w-100 radius-6' size='large' />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label='Country' className="fw-500">
                                    <Input className='w-100 radius-6' size='large' />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Space className='justify-center'>
                                    <Button type="primary" className="text-center fs-14 px-4 commn-btn radius-6">
                                        CREATE ACCOUNT
                                    </Button>
                                </Space>
                            </Col>
                        </Row>
                    </Form>
                </Space>
            </Col>
        </Row>
    </div>
  )
}

export default SettingsForm