import React,{ useState } from 'react'
import { Card, Space, Button, Image, Typography, Input } from 'antd'
import './singlecss.css'
import {
  IconPlus,
  IconMinus
} from '@tabler/icons-react'

const { Title, Text } = Typography

const LeftCardSingle2 = () => {


  const [ counter, setCounter ] = useState(1)

    const IncrementCall = () => {
        setCounter(counter + 1);
    }

    const DecrementCall = () => {
        if(counter>0){
            setCounter(counter - 1);
        }
    }

    const changeHandle=(e)=>{
        setCounter(e.targe.value)
    }

  return (
    <div className="dflex">
        <div className="width93">
            <Card className='cardNopad bg-black radius-6' >
                <Space className="w-100 space-between-center px-2 py-2">
                    <Button className="text-center radius-6 goldenbg goldbtn">Gold</Button>
                    <Title level={4} className='m-0 text-white'>CIVILISATION</Title>
                    <Image src='/assets/img/red-heart.png' preview={false} />
                </Space>
                <Image src='/assets/img/single-2.png' preview={false} className='radiusbottom' />
            </Card>
            <Space direction='vertical' className='center w-100 spacbtn text-center dblk' size={5}>
                  <Space.Compact block className='spacewidth radius-6 my-3'>
                      <Button className='text-center text-white commn-btn radius-6 bg-black goldbtn fw-600' onClick={DecrementCall}><IconMinus/></Button>
                      <Input className='w-100 fw-600 text-21 text-center' value={counter} onClick={changeHandle} size='large' />
                      <Button className='text-center text-white commn-btn radius-6 bg-black goldbtn fw-600' onClick={IncrementCall }><IconPlus/></Button>
                  </Space.Compact>
                  <Text strong>Available quantity: 8000</Text>
                  <Button className="text-center w-100 text-white commn-btn-2 fs-18 radius-6 bg-black goldbtn fw-600">BUY NOW</Button>
              </Space>
        </div>
    </div>
  )
}

export default LeftCardSingle2