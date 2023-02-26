import React from 'react'
import { Col, Row, Table, Typography, Card, Image, Button, Space } from 'antd'
import './profile.css'

const { Title } = Typography

const MySubscription = () => {

    const columns = [
        {
            title: 'Artist',
            dataIndex: 'artist',
            key: 'artist',
            render:(row,data,r)=>
            <Title level={5} className='text-white'>{data.artist}</Title>
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render:(row,data,r)=>
            <Title level={5} className='text-white'>{data.price}</Title>
        },
        {
            title: 'Renewal date',
            dataIndex: 'rdate',
            key: 'rdate',
            render:(row,data,r)=>
            <Title level={5} className='text-white'>{data.rdate}</Title>
        },
        {
            title: '',
            dataIndex: 'date',
            key: 'date',
        },
      ];
      const data = [
        {
            key: '1',
            artist: <Space>
                        <Image src='/assets/img/gradur.png' style={{width:"70px",height:"70px"}} preview={false} />
                        <Title level={2} className='text-white m-0'>
                            GRADUR
                        </Title>
                    </Space>,
            price: '1,99 €',
            rdate: '14.04.23',
            date: <Button className='commn-btn-2 bg-red radius-12 border0 text-white'>Cancel the subscription</Button>
        },
        {
            key: '2',
            artist: <Space>
                        <Image src='/assets/img/sm-2.png' style={{width:"70px",height:"70px"}} preview={false} />
                        <Title level={2} className='text-white m-0'>
                            GRADUR
                        </Title>
                    </Space>,
            price: '1,99 €',
            rdate: '14.04.23',
            date: <Button className='commn-btn-2 bg-red radius-12 border0 text-white'>Cancel the subscription</Button>
        },
        {
            key: '3',
            artist: <Space>
                        <Image src='/assets/img/sm-3.png' style={{width:"70px",height:"70px"}} preview={false} />
                        <Title level={2} className='text-white m-0'>
                            GRADUR
                        </Title>
                    </Space>,
            price: '1,99 €',
            rdate: '14.04.23',
            date: <Button className='commn-btn-2 bg-red radius-12 border0 text-white'>Cancel the subscription</Button>
        },
        {
            key: '4',
            artist: <Space>
                        <Image src='/assets/img/sm-4.png' style={{width:"70px",height:"70px"}} preview={false} />
                        <Title level={2} className='text-white m-0'>
                            GRADUR
                        </Title>
                    </Space>,
            price: '1,99 €',
            rdate: '14.04.23',
            date: <Button className='commn-btn-2 bg-red radius-12 border0 text-white'>Cancel the subscription</Button>
        },
      ];


  return (
    <div>
        <Row>
            <Col span={24}>
                <Table 
                    className='tabsub'
                    columns={columns} 
                    dataSource={data} 
                    scroll={{
                        x:700
                    }}
                />
            </Col>
        </Row>
    </div>
  )
}

export default MySubscription