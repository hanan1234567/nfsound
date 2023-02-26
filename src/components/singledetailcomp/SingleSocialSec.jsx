import React from 'react';
import { Row, Col, Space, Button, Image, Typography, Avatar } from 'antd'
import './singledetail.css'
import { NavLink } from 'react-router-dom';

const { Title, Text } = Typography


const SingleSocialSec = () => {

    const data = {
        title:"GRADUR",
        img:"gradur.png",
        desc:"Gradur, de son vrai nom Wanani Gradi Mariadi, né le 28 Novembre 1990 à Roubaix, dans le Nord, est un rappeur français. Il fait partie, avec les rappeurs Cahiips, Nyda et Brabra, du collectif Sheguey Squaad.",
        socialicon:[
            {
                icon:"insta.png"
            },
            {
                icon:"tw.png"
            },
            {
                icon:"spotify.png"
            },
            {
                icon:"youtube.png"
            },
        ]
    }
  return (
    <div className='dflex'>
        <div className='width93'>
            <Row className='justify-center text-center' gutter={[16,24]}>
                <Col span={24}>
                    <Space className='center w-100' direction='vertical'>
                        <Title level={1}>
                            {data?.title}
                        </Title>
                        <Image src={'/assets/img/'+data?.img} style={{borderBottom:"1px solid #000"}} preview={false} />
                    </Space>
                </Col>
                <Col xs={24} sm={24} md={20} lg={15}>
                    <Text strong>
                        {
                            data?.desc
                        }
                    </Text>
                </Col>
                <Col span={24}>
                    <Space className='center' size={20}>
                        {
                            data?.socialicon?.map((sociali,si)=>
                            <div key={si}>
                                <NavLink to=''>
                                    <Avatar size={50} src={'/assets/img/'+sociali?.icon} className='bg-black' style={{padding:"8px"}} />
                                </NavLink>
                            </div>
                            )
                        }
                    </Space>
                </Col>
                <Col span={24}>
                    <Space>
                        <Button className="text-center commn-btn radius-6 bg-black text-white w-100 goldbtn">
                            SEE PROFILE
                        </Button>
                    </Space>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default SingleSocialSec