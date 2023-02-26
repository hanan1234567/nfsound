import React from 'react'
import { Row, Col, Button, Typography } from 'antd'

const { Title } = Typography

const BtnGroups = () => {

    const data = {
        title:"MANY BENEFITS TO BE EARNED",
        btntext:[
            {
                btntxt:"SÉANCES STUDIO"
            },
            {
                btntxt:"PLACES DE CONCERT"
            },
            {
                btntxt:"ACCÈS BACKSTAGES"
            },
            {
                btntxt:"ENTRETIEN VIDÉO"
            },
            {
                btntxt:"MERCH DÉDICACÉ"
            },
            {
                btntxt:"ACTIVITÉS AVEC GRADUR"
            },
        ]
    }

  return (
    <div className='dflex '>
        <div className='width93 text-center py-5 borderbm'>
            <Title level={2}>{data?.title}</Title>
            <Row gutter={[16,16]} className='center rowmbl'>
                {
                    data?.btntext?.map((btntx,bt)=>
                    <Col xs={12} sm={12} md={7} className='my-4'>
                        <Button className="text-center btngrp commn-btn-1 radius-6 bg-black text-white w-100 goldbtn">
                            {btntx?.btntxt}
                        </Button>
                    </Col>
                    )
                }
                {/* <Col span={24}>
                    <div className='borderbottom'></div>
                </Col> */}
            </Row>
        </div>
    </div>
  )
}

export default BtnGroups