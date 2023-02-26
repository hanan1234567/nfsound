import React from 'react'
import { Space, Avatar, Typography} from 'antd'
import './checkout.css'

const { Title, Text } = Typography

const RightSidePart = () => {
    const data = {
        title:"Details",
        cardcontent:[
            {
                img:"slider-1.png",
                title:"NINHO - Jefe",
                amount:"20 €",
                trash:'trash.png'
            },
            {
                img:"cart-2.png",
                title:"GRADUR",
                amount:"1,99 €",
                trash:'trash.png'
            },
        ]
    }

  return (
        <div>
            <Title level={3} className='text-center'>{data?.title}</Title>
            <div direction='vertical' className='radius-12 bg-white my-3 w-100  shadow-1 parentspace'>
                {
                    data?.cardcontent?.map((cardcont,c)=>
                        <Space className='w-100 align-center-space-between py-3 px-4 cartspace-1' key={c}>
                            <Space size={15}>
                                <Avatar src={'/assets/img/'+cardcont?.img} shape='square' size={70} />
                                <Space direction='vertical' size={0}>
                                    <Title level={4} className='m-0'>{cardcont?.title}</Title>
                                </Space>
                            </Space>
                            <div className='amount text-center'>
                                <Text strong className='text-center'>{cardcont?.amount}</Text>
                            </div>
                        </Space>
                    )
                }

                <Space className='w-100 align-center-space-between py-3 px-4'>
                    <Title  level={5} className='m-0'>Total</Title>
                    <Title  level={5} className='m-0'>21,99 €</Title>
                </Space>
                
            </div>
        </div>
  )
}

export default RightSidePart