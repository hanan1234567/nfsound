import React from 'react'
import { Card, Space, Image, Typography, Avatar, Button, Row, Col } from 'antd'


const { Title, Text } = Typography

const ArtistCollectiblesCards = () => {

  const data = [
    {
        carimg:"col-1.png",
        title:"Trucs de choses",
        smalltext:"20 €",
        userimg:"card-small-img-2.png",
        subtitle:"GRADUR Ft. FRANGLISH",
        btn1: <Button className="text-center commn-btn radius-6 goldenbg goldbtn">Gold</Button>,
        btn2:"SOLD OUT",
        heartimg:"red-heart.png",
    },
    {
        carimg:"col-2.png",
        title:"Rosa",
        smalltext:"20 €",
        userimg:"card-small-img-2.png",
        subtitle:"GRADUR",
        btn1: <Button className="text-center commn-btn radius-6 graybg goldbtn">Platinium</Button>,
        btn2:"BUY NOW",
        heartimg:"red-heart.png",
    },
    {
        carimg:"col-3.png",
        title:"Zone 59",
        smalltext:"20 €",
        userimg:"card-small-img-2.png",
        subtitle:"GRADUR",
        btn1:<Button className="text-center commn-btn radius-6 skybluebg goldbtn">Diamond</Button>,
        btn2:"BUY NOW",
        heartimg:"red-heart.png",
    },
    {
        carimg:"col-4.png",
        title:"L’homme au bob",
        smalltext:"20 €",
        userimg:"card-small-img-2.png",
        subtitle:"GRADUR",
        btn1:<Button className="text-center commn-btn radius-6 goldenbg goldbtn">Gold</Button>,
        btn2:"SOLD OUT",
        heartimg:"red-heart.png",
    },
    {
        carimg:"card-2.png",
        title:"Shegueyvara 2",
        smalltext:"20 €",
        userimg:"store-5-sm.png",
        subtitle:"GRADUR",
        btn1:<Button className="text-center commn-btn radius-6 graybg goldbtn">Platinium</Button>,
        btn2:"BUY NOW",
        heartimg:"red-heart.png",
    },
    {
        carimg:"col-5.png",
        title:"Jamais",
        smalltext:"15 €",
        userimg:"store-6-sm.png",
        subtitle:"GRADUR",
        btn1:<Button className="text-center commn-btn radius-6 skybluebg goldbtn">Diamond</Button>,
        btn2:"BUY NOW",
        heartimg:"red-heart.png",
    },
]


  return (
    <div>
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
                                    <Title className='mb-ant-0' level={4} style={{color:"#fff"}}>{dat?.subtitle}</Title>
                                </Space>
                                <div className='pillcs'>
                                    <Text strong>{dat?.smalltext}</Text>
                                </div>
                            </Space>
                            <Title level={3} className='mb-ant-0 text-white'>{dat?.title}</Title>
                            <Space className='center w-100 spacbtn' style={{padding:"10px 5px",borderTop:"1px solid #919191"}}>
                                {
                                    dat?.btn1
                                }
                                <Button className='text-center w-100 text-white commn-btn bg-black radius-6 goldbtn'>{dat?.btn2}</Button>
                            </Space>
                        </Space>
                    </Card>
                </Col>
                )
            }
        </Row>
    </div>
  )
}

export default ArtistCollectiblesCards