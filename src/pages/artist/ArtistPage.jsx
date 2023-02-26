import React from 'react'
import { Row, Col } from 'antd'
import TextTop from '../../components/artistComp/TextTop'
import NewsComp from '../../components/artistComp/NewsComp'

const ArtistPage = () => {
  return (
    <div>
        <Row gutter={[16,16]}>
            <Col span={24}>
                <TextTop />
            </Col>
            <Col span={24}>
                <NewsComp />
            </Col>
        </Row>
    </div>
  )
}

export default ArtistPage