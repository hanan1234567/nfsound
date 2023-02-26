import React from 'react'
import { Drawer, Typography, Button, Space, Card, Image } from 'antd'


const { Title, Text } = Typography

const CartDrawer = ({visible, onClose}) => {
  return (
    <div>
        <Drawer title='Cart' className='drawercs'  placement="right"   visible={visible} onClose={onClose}>
            <Card style={{background:"transparent"}} className='card'>
                <Space size={20} direction='vertical' className='w-100'>
                    <Image src='/assets/img/cart-1.png' />
                    <Space className='space-cs'>
                        <Space>
                            <Title className='mb-ant-0' level={5}>NINHO - Jefe</Title>
                        </Space>
                        <div className='pillcs'>
                            <Text strong>25 €</Text>
                        </div>
                    </Space>
                    <Space className='space-cs py-2' style={{borderTop:"1px solid #000",borderBottom:"1px solid #000"}}>
                        <Title level={5} classNamem='m-0'>Total</Title>
                        <Title level={5} classNamem='m-0'>20 €</Title>
                    </Space>
                    
                </Space>
            </Card>
            <Space className='center w-100 spacbtn'>
                <Button className='text-center w-100 commn-btn bg-black text-white radius-6 goldbtn'>BUY NOW</Button>
            </Space>
        </Drawer>
    </div>
  )
}

export default CartDrawer