import React from "react";
import { Card, Space, Button, Image, Typography } from 'antd'
import './singledetail.css'

const { Title } = Typography

const LeftCardSingle = () => {
    return(
        <div className="dflex">
            <div className="width93">
                <Card className='cardNopad bg-black radius-6' >
                    <Space className="w-100 space-between-center px-2 py-2">
                        <Button className="text-center commn-btn radius-6 graybg goldbtn">Platinium</Button>
                        <Title level={4} className='m-0 text-white'>SHEGUEYVARA 2</Title>
                        <Image src='/assets/img/red-heart.png' preview={false} />
                    </Space>
                    <Image src='/assets/img/single-1.png' preview={false} className='radiusbottom' />
                    
                </Card>
                <Space direction='vertical' className='center w-100 spacbtn text-center dblk my-3' size={0}>
                        <Title level={3}>OFFICIAL RELEASE IN</Title>
                        <Button className="text-center w-100 text-white commn-btn-2 fs-18 radius-6 bg-black goldbtn fw-600">04D 12H 23M 57S</Button>
                    </Space>
            </div>
        </div>
    )
}

export default LeftCardSingle