import React from 'react'
import { Col, Row, Space, Form, Button, Input, Image } from "antd";

const SecurityForm = () => {
  return (
    <div>
        <Row gutter={[16,10]} className='justify-center my-5'>
            <Col xs={24} sm={24} md={14} lg={10}>
                <Form layout="vertical">
                    <Row gutter={[16,16]}>
                        <Col span={24}>
                            <Form.Item label='Old password' className="fw-500">
                                <Input className='w-100 radius-6' size='large' />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label='New password' className="fw-500">
                                <Input className='w-100 radius-6' size='large' />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label='Confirm password' className="fw-500">
                                <Input className='w-100 radius-6' size='large' />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Space className='justify-center'>
                                <Button type="primary" className="text-center fs-14 px-4 commn-btn-2 radius-6">
                                    CHANGE PASSWORD
                                </Button>
                            </Space>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    </div>
  )
}

export default SecurityForm
