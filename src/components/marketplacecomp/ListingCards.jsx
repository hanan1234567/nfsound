import React from 'react'
import { Card, Space, Image, Typography, Avatar, Button, Row, Col } from 'antd'

const { Title, Text } = Typography

const ListingCards = () => {

    const data = [
        {
            carimg:"store-1.png",
            title:"Civilisation",
            smalltext:"Remove",
            userimg:"store-1-sm.png",
            subtitle:"ORELSAN",
            btn1: <Button className="text-center commn-btn radius-6 goldenbg goldbtn">Gold</Button>,
            btn2:"1493/8000",
            heartimg:"red-heart.png",
        },
        {
            carimg:"store-2.png",
            title:"KMT",
            smalltext:"Remove",
            userimg:"store-2-sm.png",
            subtitle:"GAZO",
            btn1:<Button className="text-center commn-btn radius-6 graybg goldbtn">Platinium</Button>,
            btn2:"2/2000",
            heartimg:"red-heart.png",
        },
    ]


  return (
    <div className='gradient-bg py-5'>
        <div className='width93'>
        <Row gutter={[32,32]}>
                {
                    data?.map((dat,dt)=>
                    <Col xs={24} sm={24} md={12} lg={8} key={dt}>
                        <Card className='cardnf border0 cardby'
                            >
                            <Space size={20} direction='vertical position-relative gapmbl'>
                                <Image src={'/assets/img/'+dat?.carimg} />
                                <div className='heart'>
                                    <Image src={'/assets/img/'+dat?.heartimg} />
                                </div>
                                <Space className='space-cs'>
                                    <Space>
                                        <Avatar size={55} shape='square' src={'/assets/img/'+dat?.userimg} />
                                        <Title className='mb-ant-0' level={5} style={{color:"#fff"}}>{dat?.subtitle}</Title>
                                    </Space>
                                    <Button className='bg-red px-4 radius-6 shadow-1 border0'>
                                        <Text strong className='text-white'>{dat?.smalltext}</Text>
                                    </Button>
                                </Space>
                                <Title level={3} className='mb-ant-0 text-white'>{dat?.title}</Title>
                                <Space className='center w-100 spacbtn' style={{padding:"10px 5px",borderTop:"1px solid #919191"}}>
                                    {
                                        dat?.btn1
                                    }
                                    <Button className='text-center w-100 commn-btn bg-white radius-6 goldbtn'>{dat?.btn2}</Button>
                                </Space>
                            </Space>
                        </Card>
                    </Col>
                    )
                }
            </Row>
        </div>
    </div>
  )
}

export default ListingCards