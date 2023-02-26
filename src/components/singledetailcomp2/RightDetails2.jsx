import React,{ useState } from 'react'
import { Space, Row, Col, Typography, Button, Card, Input } from 'antd'
import {
    IconPlus,
    IconMinus
} from '@tabler/icons-react'

const { Title, Text } = Typography

const RightDetails2 = () => {

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
    

    const data = {
        title:"Orelsan",
        rowcontent:[
            {
                head:"Edition",
                desc:"#1"
            },
            {
                head:"Category",
                desc:"French Rap"
            },
            {
                head:"Type",
                desc:"Single"
            },
            {
                head:"Drop Date",
                desc:"28.12.2022"
            },
            {
                head:"Listing Price",
                desc:"20 €"
            },
            {
                head:"Total copies",
                desc:"8000"
            },
        ],
        title2:"Description",
        desc:"Le dernier son de Orelsan - Civilisation est disponible en exclusivité sur NFSounds !"
        
    }


  return (
    <div className='dflex'>
        <div className='width93'>
            <Card className='bg-transparent cardNopad border0'>
                <Space direction='vertical' className='w-100' size={15}>
                    <Title level={2} className='text-mbl-cen'>{data?.title}</Title>
                    {
                        data?.rowcontent?.map((rowcont,rc)=>
                        <Row className='borderbottom'>
                            <Col span={10} className='py-2'>
                                <Title level={5} className='dim-color'>{rowcont?.head}</Title>
                            </Col>
                            <Col span={14} className='py-2'>
                                <Title level={5} className='fw-600'>{rowcont?.desc}</Title>
                            </Col>
                        </Row>
                        )
                    }
                    <Space direction='vertical my-2'>
                        <Title level={5} className='dim-color text-center'>{data?.title2}</Title>
                        <Text strong>
                            {
                                data?.desc
                            }
                        </Text>
                    </Space>
                </Space>
                <div className='borderbottom my-3' style={{paddingTop:"10px"}}></div>
                <Space direction='vertical' className='center w-100 spacbtn text-center dnone' size={5}>
                    <Space.Compact block className='spacewidth radius-6 my-3'>
                        <Button className='text-center text-white commn-btn radius-6 bg-black goldbtn fw-600' onClick={DecrementCall}><IconMinus/></Button>
                        <Input className='w-100 fw-600 text-21 text-center' value={counter} onClick={changeHandle} size='large' />
                        <Button className='text-center text-white commn-btn radius-6 bg-black goldbtn fw-600' onClick={IncrementCall }><IconPlus/></Button>
                    </Space.Compact>
                    <Text strong>Available quantity: 8000</Text>
                    <Button className="text-center w-100 text-white commn-btn-1 radius-6 bg-black goldbtn fw-600">BUY NOW</Button>
                </Space>
            </Card>
        </div>
    </div>
  )
}

export default RightDetails2