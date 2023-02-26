import React from 'react'
import { Row, Col, Typography } from 'antd'
import CartComp from '../../components/cartcomp/CartComp'
import Righttotal from '../../components/cartcomp/Righttotal'
const { Title, Text } = Typography
const Cartpage = () => {
  return (
    <div className='cart-bg'>
      
      <Title level={3} className='py-3 px-3'> CART.</Title>
        <Row gutter={[16,16]}>
            <Col xs={{order:2,span:24}} sm={{order:2,span:24}} md={{order:2,span:24}} lg={{order:1,span:12}}>
                <CartComp />
            </Col>
            <Col xs={{order:1,span:24}} sm={{order:1,span:24}} md={{order:1,span:24}} lg={{order:2,span:12}}>
                <Righttotal />
            </Col>
        </Row>
    </div>
  )
}

export default Cartpage