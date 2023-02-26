import { Form, Row, Col, Select, DatePicker } from 'antd'
import React from 'react'

const { Option } = Select

const Filter = () => {
  return (
    <div>
        <Form>
            <Row gutter={[10,10]}>
                <Col xs={12} sm={6} md={6} lg={6}>
                    <Form.Item>
                        <Select
                            size='large'
                            className='bg-transparent w-100 slectradius'
                            placeholder="Artist"
                            >
                            <Option value="Artist">Artist</Option>
                            <Option value="Artist">Artist 1</Option>
                            <Option value="Artist">Artist 2</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                    <Form.Item>
                        <Select
                            size='large'
                            className='bg-transparent w-100 slectradius'
                            placeholder="Genre"
                            >
                            <Option value="Genre">Genre</Option>
                            <Option value="Genre">Genre 1</Option>
                            <Option value="Genre">Genre 2</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                    <Form.Item>
                        <DatePicker className='w-100 bg-transparent radius-12' size='large' placeholder='Release Date' />
                    </Form.Item>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                    <Form.Item>
                        <Select
                            size='large'
                            className='bg-transparent w-100 slectradius'
                            placeholder="Price"
                            >
                            <Option value="Price">Price</Option>
                            <Option value="Price">Price 1</Option>
                            <Option value="Price">Price 2</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    </div>
  )
}

export default Filter