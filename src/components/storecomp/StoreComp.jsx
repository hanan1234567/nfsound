import React from 'react'
import { Typography, Row, Col } from 'antd'
import './store.css'
import Filter from './Filter';
import StoreCard from './StoreCard';

const { Title } = Typography



const StoreComp = () => {
  return (
    <div className='dflex'>
        <div  className='width93'>
            <Row gutter={[16,16]} className='my-3'>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Title level={2} className='m-0 mblBorder'>
                        Store
                    </Title>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Filter />
                </Col>
                <Col span={24} className='mblnone'>
                    <div className='blackline'></div>
                </Col>
                <Col span={24}>
                    <StoreCard />
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default StoreComp