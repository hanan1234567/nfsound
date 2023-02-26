import React from 'react'
import{ Row, Col, Space, Button, Image, Typography, Avatar } from 'antd'
import './artistp.css'
import { NavLink } from 'react-router-dom';

const { Title, Text } = Typography

const ArtistprofileSocio = () => {


    const data = {
        title:"GRADUR",
        img:"grad-pro.png",
        desc:"📍Dubaï 🇦🇪 Gradurbooking1@gmail.com",
        bgText:"GRADUR GRADUR GRAD DUR GRADUR GRADUR GRADUR GRADUR GR",
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
    <div className='gradient-bg-1 position-relative parentdiv'  data-content={data?.bgText}>
        <div className='width93 borderbm py-5' >
            <Row className='justify-center text-center' gutter={[16,24]}>
                <Col span={24}>
                    <Space className='center w-100' direction='vertical' style={{marginTop:"20px"}}>
                        <Image src={'/assets/img/'+data?.img} width={'320px'} className='goldborder' preview={false} />
                        <Title level={1} className='m-0'>
                            {data?.title}
                        </Title>
                    </Space>
                </Col>
                <Col xs={24} sm={24} md={20} lg={10}>
                    <Title level={4} className='m-0'>
                        {
                            data?.desc
                        }
                    </Title>
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

export default ArtistprofileSocio