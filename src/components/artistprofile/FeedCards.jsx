import React from 'react'
import { Card, Space, Image, Typography, Input, Button, Row, Col } from 'antd'

const { Title, Text } = Typography

const FeedCards = () => {


    const data = {
        title:"NEWS.",
        carddata:[
            {
                carimg:"ar-p-1.png",
                heart:"red-heart.png",
                likes:"96",
                commentsicon:"comments.png",
                commentstext:"34",
                subtitle:"Nfsounds",
                check:"fillcheck.png",
                subtext:"New song out now !",
                subtext2:"before the sold out",
                showComents:"Show all comments",
                sendtext:"Send"
            },
            {
                carimg:"ar-p-2.png",
                heart:"red-heart.png",
                likes:"76",
                commentsicon:"comments.png",
                commentstext:"56",
                subtitle:"Nfsounds",
                check:"fillcheck.png",
                subtext:"New song out now ! Grab it",
                subtext2:"before the sold out",
                showComents:"Show all comments",
                sendtext:"Send"
            },
            {
                carimg:"ar-p-3.png",
                heart:"red-heart.png",
                likes:"54",
                commentsicon:"comments.png",
                commentstext:"21",
                subtitle:"Nfsounds",
                check:"fillcheck.png",
                subtext:"New song out now ! Grab it",
                subtext2:"before the sold out",
                showComents:"Show all comments",
                sendtext:"Send"
            },
            {
                carimg:"ar-p-4.png",
                heart:"red-heart.png",
                likes:"96",
                commentsicon:"comments.png",
                commentstext:"34",
                subtitle:"Nfsounds",
                check:"fillcheck.png",
                subtext:"New song out now !",
                subtext2:"before the sold out",
                showComents:"Show all comments",
                sendtext:"Send"
            },
            {
                carimg:"ar-p-5.png",
                heart:"red-heart.png",
                likes:"96",
                commentsicon:"comments.png",
                commentstext:"34",
                subtitle:"Nfsounds",
                check:"fillcheck.png",
                subtext:"New song out now !",
                subtext2:"before the sold out",
                showComents:"Show all comments",
                sendtext:"Send"
            },
            {
                carimg:"ar-p-6.png",
                heart:"red-heart.png",
                likes:"96",
                commentsicon:"comments.png",
                commentstext:"34",
                subtitle:"Nfsounds",
                check:"fillcheck.png",
                subtext:"New song out now !",
                subtext2:"before the sold out",
                showComents:"Show all comments",
                sendtext:"Send"
            },
        ]
}


  return (
    <div>
        <Row gutter={[32,32]}>
            {
                data?.carddata?.map((cardd,dt)=>
                <Col xs={24} sm={24} md={12} lg={8} key={dt}>
                    <Card className='cardnw radius-12 shadow-1 h-100'>                        
                        <Image src={'/assets/img/'+cardd?.carimg} preview={false} />
                        <Space size={5} direction='vertical' style={{paddingTop:"20px"}}>
                            <Space className='w-100' size={10}>
                                <Space size={4}>
                                    <Image src={'/assets/img/'+cardd?.heart} width={'20px'} preview={false} />
                                    <Title className='m-0' level={5}>{cardd?.likes}</Title>
                                </Space>
                                <Space size={4}>
                                    <Image src={'/assets/img/'+cardd?.commentsicon} width={'20px'} preview={false} />
                                    <Title className='m-0' level={5}>{cardd?.commentstext}</Title>
                                </Space>
                            </Space>
                            <Space className='w-100' size={10}>
                                <Space size={4}>
                                    <Title className='m-0' level={5}>{cardd?.subtitle}</Title>
                                    <Image src={'/assets/img/'+cardd?.check} width={'14px'} preview={false} />
                                </Space>
                                <Title className='m-0' level={5}>{cardd?.subtext}</Title>
                            </Space>
                            
                            <Title level={5} className='m-0'>{cardd?.subtext2}</Title>
                        </Space>
                        <Space direction='vertical' className='w-100' size={0} style={{paddingTop:"15px"}}>                            
                            <Text className='m-0 fs-12 dim-color' level={5}>{cardd?.showComents}</Text>
                            <Space className='w-100 borderGold spacfirst radius-6 py-1 px-1'>
                                <Input className='border0 w-100' />
                                <Button className='bg-black smallbtn text-white radius-6' size='small'>{cardd?.sendtext}</Button>
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

export default FeedCards