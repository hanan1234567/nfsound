import React from 'react'
import { Space, Row, Col, Typography, Button, Card } from 'antd'

const { Title, Text } = Typography

const RightDetails = () => {

    const data = {
        title:"Gradur",
        rowcontent:[
            {
                head:"Edition",
                desc:"#1"
            },
            {
                head:"Category",
                desc:"French Rap"
            },
            {
                head:"Type",
                desc:"Single"
            },
            {
                head:"Drop Date",
                desc:"28.12.2022"
            },
            {
                head:"Listing Price",
                desc:"20 €"
            },
            {
                head:"Total copies",
                desc:"2000"
            },
        ]
    }
  return (
    <div className='dflex'>
        <div className='width93'>
            <Card className='bg-transparent cardNopad border0'>
                <Space direction='vertical' className='w-100' size={15}>
                    <Title level={2} className='text-mbl-cen'>{data?.title}</Title>
                    {
                        data?.rowcontent?.map((rowcont,rc)=>
                        <Row className='borderbottom'>
                            <Col span={10} className='py-2'>
                                <Title level={5} className='dim-color'>{rowcont?.head}</Title>
                            </Col>
                            <Col span={14} className='py-2'>
                                <Title level={5} className='fw-600'>{rowcont?.desc}</Title>
                            </Col>
                        </Row>
                        )
                    }
                    <Space direction='vertical my-2'>
                        <Title level={5} className='dim-color text-center'>Description</Title>
                        <Text strong>
                            Le dernier son de Gradur - Shegueyvara 2 est disponible en exclusivité sur NFSounds !
                        </Text>
                    </Space>
                </Space>
                <div className='borderbottom my-5'></div>
                <Space direction='vertical' className='center w-100 spacbtn text-center dnone' size={5}>
                    <Title level={3}>OFFICIAL RELEASE IN</Title>
                    <Button className="text-center w-100 text-white commn-btn radius-6 bg-black goldbtn fw-600">04D 12H 23M 57S</Button>
                </Space>
            </Card>
        </div>
    </div>
  )
}

export default RightDetails