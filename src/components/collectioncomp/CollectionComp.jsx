import React from 'react'
import {
    Row, Col, Typography
} from 'antd'
import StoreCard from '../storecomp/StoreCard'
import Filter from '../storecomp/Filter'

const { Title } = Typography

const CollectionComp = () => {
  return (
    <div className='dflex'>
        <div className='width93'>
            <Row gutter={[32,32]} className='my-3'>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Title level={2} className='m-0 mblBorder'>
                        Collection
                    </Title>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Filter />
                </Col>
                <Col>
                    <StoreCard />
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default CollectionComp