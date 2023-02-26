import React from 'react'
import { Row, Col } from 'antd'
import ArtistprofilteTopSearch from '../../components/artistprofile/ArtistprofilteTopSearch'
import ArtistprofileSocio from '../../components/artistprofile/ArtistprofileSocio'
import BtnGroups from '../../components/singledetailcomp/BtnGroups'
import ArtistFeedTabs from '../../components/artistprofile/ArtistFeedTabs'

const ArtisttProfilePage = () => {
  return (
    <div>
        <Row>
            <Col span={24}>
                <ArtistprofilteTopSearch />
            </Col>
            <Col span={24}>
              <ArtistprofileSocio />
            </Col>
            <Col span={24} >
              <BtnGroups />
            </Col>
            <Col span={24}>
              <ArtistFeedTabs />
            </Col>
        </Row>
    </div>
  )
}

export default ArtisttProfilePage