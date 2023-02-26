import React from 'react'
import { Row, Col } from 'antd'
import BtnGroups from '../../components/singledetailcomp/BtnGroups'
import SingleSocialSec from '../../components/singledetailcomp/SingleSocialSec'
import LeftCardSingle2 from '../../components/singledetailcomp2/LeftCardSingle2'
import RightDetails2 from '../../components/singledetailcomp2/RightDetails2'

const SingleDetailPage2 = () => {
  return (
    <div className='py-5 bg-shap'>
        <Row gutter={[16,16]} className='justify-center'>
            <Col xs={24} sm={24} md={24} lg={12}>
                <LeftCardSingle2 />
            </Col>
            <Col xs={24} sm={24} md={24} lg={10}>
                <RightDetails2 />
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

export default SingleDetailPage2