import React from 'react'
import { Card, Space, Image, Typography, Pagination, Avatar, Button, Row, Col } from 'antd'
import './store.css'
import { NavLink } from 'react-router-dom'

const { Title, Text } = Typography

const DropingComp = () => {


    const data = [
        {
            carimg:"card-1.png",
            title:"Jefe",
            smalltext:"25 €",
            userimg:"card-small-img-1.png",
            subtitle:"NINHO ",
            btn1: <Button className="text-center w-100 commn-btn radius-6 goldenbg goldbtn">Gold</Button>,
            btn2:"03D 12H 54M 35S"
        },
        {
            carimg:"card-2.png",
            title:"Shegueyvara 2",
            smalltext:"25 €",
            userimg:"card-small-img-2.png",
            subtitle:"GRADUR",
            btn1:<Button className="text-center w-100 commn-btn radius-6 graybg goldbtn">Platinium</Button>,
            btn2:"04D 12H 23M 57S"
        },
        {
            carimg:"card-3.png",
            title:"Watawi",
            smalltext:"25 €",
            userimg:"card-small-img-3.png",
            subtitle:"CKAY",
            btn1:<Button className="text-center w-100 commn-btn radius-6 skybluebg goldbtn">Diamond</Button>,
            btn2:"06D 1H 12M 43S"
        },
    ]


  return (
    <div className='dflex'>
        <div  className='width93 w-100mbl'>
            <Title level={2} className='my-3'>
                Droping Soon
            </Title>
            <Row gutter={[10,10]} className='rowmbl'>
                {
                    data?.map((dat,dt)=>
                    <Col xs={24} sm={12} md={12} lg={8} key={dt}>
                        <NavLink to='/single' className='text-white'>
                            <Card className='cardnf cardby  border0'
                                >
                                <Space size={20} direction='vertical' className='w-100 gapmbl'>
                                    <Image src={'/assets/img/'+dat?.carimg} />
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
                                        <Button className='text-center w-100 commn-btn radius-6 goldbtn'>{dat?.btn2}</Button>
                                    </Space>
                                </Space>
                            </Card>
                        </NavLink>
                    </Col>
                    )
                }
                    {/* <Col span={24}>
                        <div className='paginationcss'>
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </Col> */}
            </Row>
        </div>
    </div>
  )
}

export default DropingComp