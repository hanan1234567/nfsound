import { Row, Col } from 'antd'
import React from 'react'
import DropingComp from '../../components/storecomp/DropingComp'
import StoreComp from '../../components/storecomp/StoreComp'
import StoreFirstComp from '../../components/storecomp/StoreFirstComp'

const StorePage = () => {
  return (
    <div >
        <Row gutter={[32,32]}>
          <Col span={24}>
            <StoreFirstComp />
          </Col>
          <Col span={24}>
            <DropingComp />
          </Col>
          <Col span={24}>
            <StoreComp />
          </Col>
        </Row>
    </div>
  )
}

export default StorePage