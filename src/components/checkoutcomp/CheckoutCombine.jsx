import React from 'react'
import { Row, Col, Typography } from 'antd'
import LeftCheckoutcomp from './LeftCheckoutcomp'
import RightSidePart from './RightSidePart'

const { Title } = Typography

const CheckoutCombine = () => {
  return (
    <div className='dflex'>
        <div className='width93'>
            <Row gutter={[32,32]}>
                <Col span={24}>
                    <Title level={2}>CHECKOUT.</Title>
                </Col>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <LeftCheckoutcomp />
                </Col>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <RightSidePart />
                </Col>
            </Row>
        </div>        
    </div>
  )
}

export default CheckoutCombine