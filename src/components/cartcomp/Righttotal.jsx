import React from 'react'
import { Space, Typography, Button } from 'antd'
import './cart.css'

const { Title, Text } = Typography

const Righttotal = () => {
  return (
    <div className='my-5 dflex'>
        <div className='width93'>
            <Space direction='vertical' className='radius-12 bg-white w-100 py-4 px-4  shadow-1'>
                <Space className='space-cs'>
                    <Title level={5} classNamem='m-0'>Total</Title>
                    <Title level={5} classNamem='m-0'>21,99 €</Title>
                </Space>
                <div className='blackline'></div>
                <Button className='text-center w-100 commn-btn bg-black text-white radius-6 goldbtn'>BUY NOW</Button>
            </Space>
        </div>
    </div>
  )
}

export default Righttotal