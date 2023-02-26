import React from 'react'
import { Row, Col } from 'antd'
import CollectionBanner from '../../components/collectioncomp/CollectionBanner'
import CollectionComp from '../../components/collectioncomp/CollectionComp'

const Collectionpage = () => {
  return (
    <div>
        <Row gutter={[16,16]}>
            <Col span={24}>
                <CollectionBanner />
            </Col>
            <Col span={24}>
                <CollectionComp />
            </Col>
        </Row>
    </div>
  )
}

export default Collectionpage