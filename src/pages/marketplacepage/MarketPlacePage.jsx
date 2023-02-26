import React from 'react'
import { Row, Col } from 'antd'
import MarketPlaceFilter from '../../components/marketplacecomp/MarketPlaceFilter'
import MarketplaceCards from '../../components/marketplacecomp/MarketplaceCards'
import ListingCards from '../../components/marketplacecomp/ListingCards'

const MarketPlacePage = () => {
  return (
    <div>
        <Row>
            <Col span={24}>
                <MarketPlaceFilter />
            </Col>
            <Col span={24}>
                <MarketplaceCards />
            </Col>
            <Col span={24}>
                <ListingCards />
            </Col>
        </Row>
    </div>
  )
}

export default MarketPlacePage