import React from 'react'
import { Row, Col } from 'antd'
import LeftCardSingle from '../../components/singledetailcomp/LeftCardSingle'
import RightDetails from '../../components/singledetailcomp/RightDetails'
import BtnGroups from '../../components/singledetailcomp/BtnGroups'
import SingleSocialSec from '../../components/singledetailcomp/SingleSocialSec'

const SingleDetailPage = () => {
  return (
    <div className='py-5 bg-shap'>
        <Row gutter={[16,16]} className='justify-center'>
            <Col xs={24} sm={24} md={24} lg={12}>
                <LeftCardSingle />
            </Col>
            <Col xs={24} sm={24} md={24} lg={10}>
                <RightDetails />
            </Col>
            <Col span={24}>
                <BtnGroups />
            </Col>
            <Col span={24}>
                <SingleSocialSec />
            </Col>
        </Row>
    </div>
  )
}

export default SingleDetailPage