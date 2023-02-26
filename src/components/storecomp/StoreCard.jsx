import React,{ useState } from 'react'
import { Card, Space, Image, Typography, Avatar, Button, Row, Col } from 'antd'
import './store.css'
import CartDrawer from './CartDrawer';
import PaginationCust from './PaginationCust';
import { NavLink } from 'react-router-dom';

const { Title, Text } = Typography

const StoreCard = () => {

    const [ visibledrawer, setVisibleDrawer ] = useState(false)

    const data = [
        {
            carimg:"store-1.png",
            title:"Civilisation",
            smalltext:"20 €",
            userimg:"store-1-sm.png",
            subtitle:"ORELSAN",
            btn1: <Button className="text-center w-100 commn-btn radius-6 goldenbg goldbtn">Gold</Button>,
            btn2:"BUY NOW",
            heartimg:"red-heart.png",
        },
        {
            carimg:"store-2.png",
            title:"KMT",
            smalltext:"20 €",
            userimg:"store-2-sm.png",
            subtitle:"GAZO",
            btn1:<Button className="text-center w-100 commn-btn radius-6 graybg goldbtn">Platinium</Button>,
            btn2:"BUY NOW",
            heartimg:"red-heart.png",
        },
        {
            carimg:"store-3.png",
            title:"Doja",
            smalltext:"15 €",
            userimg:"store-3-sm.png",
            subtitle:"CENTRAL CEE",
            btn1:<Button className="text-center w-100 commn-btn radius-6 skybluebg goldbtn">Diamond</Button>,
            btn2:"BUY NOW",
            heartimg:"red-heart.png",
        },
        {
            carimg:"store-4.png",
            title:"Nonante Cinq",
            smalltext:"20 €",
            userimg:"store-4-sm.png",
            subtitle:"ANGÈLE",
            btn1:<Button className="text-center w-100 commn-btn radius-6 goldenbg goldbtn">Gold</Button>,
            btn2:"BUY NOW",
            heartimg:"red-heart.png",
        },
        {
            carimg:"store-5.png",
            title:"Racine carrée",
            smalltext:"20 €",
            userimg:"store-5-sm.png",
            subtitle:"STROMAE",
            btn1:<Button className="text-center w-100 commn-btn radius-6 graybg goldbtn">Platinium</Button>,
            btn2:"BUY NOW",
            heartimg:"red-heart.png",
        },
        {
            carimg:"store-6.png",
            title:"GDC",
            smalltext:"15 €",
            userimg:"store-6-sm.png",
            subtitle:"BOOBA",
            btn1:<Button className="text-center w-100 commn-btn radius-6 skybluebg goldbtn">Diamond</Button>,
            btn2:"BUY NOW",
            heartimg:"red-heart.png",
        },
    ]

  return (
    <div>
        <Row gutter={[16,16]}>
            {
                data?.map((dat,dt)=>
                <Col xs={24} sm={12} md={12} lg={8} key={dt}>
                    <NavLink to='/single' className='text-white'>
                        <Card className='cardnf border0 cardby'
                            >
                            <Space size={20} direction='vertical position-relative w-100 gapmbl'>
                                <Image src={'/assets/img/'+dat?.carimg} />
                                <div className='heart'>
                                    <Image src={'/assets/img/'+dat?.heartimg} />
                                </div>
                                <Space className='space-cs'>
                                    <Space>
                                        <Avatar size={55} shape='square' src={'/assets/img/'+dat?.userimg} />
                                        <Title className='mb-ant-0' level={5} style={{color:"#fff"}}>{dat?.subtitle}</Title>
                                    </Space>
                                    <div className='pillcs'>
                                        <Text strong>{dat?.smalltext}</Text>
                                        {/* <Image src={'/nfimg/'+dat?.curimg} preview={false} /> */}
                                    </div>
                                </Space>
                                <Title level={3} className='mb-ant-0 text-white'>{dat?.title}</Title>
                                <Space className='align-center-space-between w-100 spacbtn' style={{padding:"10px 5px",borderTop:"1px solid #919191"}}>
                                    {
                                        dat?.btn1
                                    }
                                    <Button onClick={()=>setVisibleDrawer(true)} className='text-center w-100 text-white commn-btn bg-black radius-6 goldbtn'>{dat?.btn2}</Button>
                                </Space>
                            </Space>
                        </Card>
                    </NavLink>
                </Col>
                )
            }
            <Col span={24}>
                <PaginationCust />
            </Col>
        </Row>

        <CartDrawer visible={visibledrawer} onClose={()=>setVisibleDrawer(false)} />
    </div>
  )
}

export default StoreCard