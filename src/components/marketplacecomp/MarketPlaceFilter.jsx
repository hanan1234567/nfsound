import React,{ useState } from 'react'
import { Form, Row, Col, Select, DatePicker, Button, Typography } from 'antd'

const { Option } = Select
const { Title } = Typography

const MarketPlaceFilter = () => {
    const [cardshow, setCardShow] = useState(false)
  return (
    <div className='py-4 borderbm'>
        <div className='width93'>
            <Row gutter={[12,12]}>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <Title level={2} className='m-0 mblBorder'>
                        MARKETPLACE.
                    </Title>
                </Col>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <Form>
                        <Row gutter={[10,10]} className='center'>
                            <Col xs={{order:2,span:24}} sm={{order:2,span:24}} md={{order:2,span:14}} lg={{order:1,span:5}}>
                                <Button className='text-center commn-btn-2 w-100 brand-border radius-6' 
                                onClick={()=>setCardShow(!cardshow)}>
                                    <Title level={5} className='m-0'>Listing</Title>
                                </Button>
                            </Col>
                            <Col xs={{order:1,span:12}} sm={{order:1,span:6}} md={{order:1,span:6}} lg={{order:2,span:5}}>
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
                            <Col xs={{order:1,span:12}} sm={{order:1,span:6}} md={{order:1,span:6}} lg={{order:2,span:4}}>
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
                            <Col xs={{order:1,span:12}} sm={{order:1,span:6}} md={{order:1,span:6}} lg={{order:2,span:5}}>
                                <Form.Item>
                                    <DatePicker className='w-100 bg-transparent radius-12' size='large' placeholder='Release Date' />
                                </Form.Item>
                            </Col>
                            <Col xs={{order:1,span:12}} sm={{order:1,span:6}} md={{order:1,span:6}} lg={{order:2,span:5}}>
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
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default MarketPlaceFilter