import React from 'react'
import { Row, Col } from 'antd'
import ProfileLeftBlock from './ProfileLeftBlock'
import ProfileRightTabBlock from './ProfileRightTabBlock'

export const ProfileCombineComp = () => {
  return (
    <div className='justify-center gradient-bg py-5'>
        <div className='width93'>
            <Row gutter={[16,16]}>
                <Col xs={24} sm={24} md={24} lg={5}>
                    <ProfileLeftBlock />
                </Col>
                <Col xs={24} sm={24} md={24} lg={19}>
                    <ProfileRightTabBlock />
                </Col>
            </Row>
        </div>
    </div>
  )
}
