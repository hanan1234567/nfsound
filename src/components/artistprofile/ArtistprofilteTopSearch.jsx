import React from 'react'
import{ Row, Col, Card, Input, Image, Typography } from 'antd'
import {
    IconSearch
} from '@tabler/icons-react'
import './artistp.css'

const { Title } = Typography;

const ArtistprofilteTopSearch = () => {


    const data = [
        {   
            img:"sm-6.png",
            title:"NAZA"
        },
        {   
            img:"sm-2.png",
            title:"DJSNAKE"
        },
        {   
            img:"sm-3.png",
            title:"ORELSAN"
        },
        {   
            img:"sm-4.png",
            title:"NINHO"
        },
        {   
            img:"sm-5.png",
            title:"TRAVIS SCOTT"
        },
            
    ]

  return (
    <div className='justify-center'>
        <div className='width93 borderbm py-4'>
            <Row gutter={[16,16]} style={{alignItems:"center"}} className='rowmbl'>
                <Col xs={12} sm={12} md={8} lg={4}>
                    <Input size="large" className='w-100 radius-6 commn-btn' placeholder="Search artist" prefix={<IconSearch />} />
                </Col>
                {
                    data?.map((dat,cs)=>
                    <Col xs={12} sm={12} md={8} lg={4} key={cs}>
                        <Card className='bg-black radius-12 position-relative p-0 cardsm overflow-hidden'
                            cover={
                                <Image src={'/assets/img/'+dat?.img} style={{width:"70px",height:"70px"}} preview={false} />
                            }
                        >
                            
                            <div className='overImageText w-100 text-center'>
                                <Title level={2} className='text-white'>
                                    {dat?.title}
                                </Title>
                            </div>
                        </Card>
                    </Col>
                    )
                }
            </Row>
        </div>
    </div>
  )
}

export default ArtistprofilteTopSearch