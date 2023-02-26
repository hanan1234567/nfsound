import React,{ useState } from 'react'
import { Space, Row, Col, Typography, Card, Radio, Image, Button, Form, Input, Collapse } from 'antd'
import {  IconChevronUp, IconChevronDown } from '@tabler/icons-react'
import './checkout.css'

const { Panel } = Collapse;
const { Title } = Typography

const LeftCheckoutcomp = () => {
    const [currentPanel,setCurrentPanel]=useState(['1'])

    
        const faqData = 
            {   
                title:"Payment methods",
                spaceContent:[
                    {
                        faqs:[
                            {
        
                                head:<Space className='align-center-space-between w-100'>
                                        <Radio><Title level={5} className='m-0'>PayPal</Title></Radio>
                                        <Image src='/assets/img/paypal.png' preview={false} />
                                    </Space>,
                            },
                            {
        
                                head:<Space className='align-center-space-between w-100'>
                                        <Radio><Title level={5} className='m-0'>Credit card</Title></Radio>
                                        <Space>
                                            <Image src='/assets/img/visa.png' preview={false} />
                                            <Image src='/assets/img/master.png' preview={false} />
                                        </Space>
                                    </Space>,
                            },
                        ]
                    }
                ]
            }


  return (
        <div>
            <Title level={3} className='text-center m-0'>{faqData?.title}</Title>
            <div direction='vertical' className='radius-12 bg-white my-3 w-100  parentspace'>                
                {
                    faqData?.spaceContent?.map((spacec,sc)=>
                    <div className='w-100  cartspace' key={sc}>
                        <Collapse
                            defaultActiveKey={['1']}
                            className='py-4 px-4 border0 radius-12 shadow-1'
                            onChange={(keys)=>{setCurrentPanel(keys)}}
                        >
                            {
                                spacec?.faqs?.map((faq,f)=>
                                    <Panel 
                                    className='collapseBorder'
                                        showArrow={false}  
                                        header={
                                           <div>{faq?.head}</div>
                                        } 
                                        key={f} 
                                        extra={
                                            ((currentPanel?.findIndex(x=>x==f))>-1)?
                                            <IconChevronDown style={{transform:"translateY(10px)"}} />:
                                            <IconChevronUp style={{transform:"translateY(10px)"}} />
                                        }
                                        >
                                        <Card className='border0'>
                                            <Form layout='vertical'>
                                                <Row gutter={[16,16]}>
                                                    <Col span={24}>
                                                        <Form.Item label='Card numbers'>
                                                            <Input className='bg-transparent w-100 radius-6' size='large' placeholder='0000 0000 0000 0000' />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Form.Item label='Card name'>
                                                            <Input className='bg-transparent w-100 radius-6' size='large' placeholder='John Doe' />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={12}>
                                                        <Form.Item label='Expiration date'>
                                                            <Input className='bg-transparent w-100 radius-6' size='large' placeholder='12/27' />
                                                        </Form.Item>
                                                    </Col>    
                                                    <Col xs={24} sm={24} md={12}>
                                                        <Form.Item label='CVV'>
                                                            <Input className='bg-transparent w-100 radius-6' size='large' placeholder='123' />
                                                        </Form.Item>
                                                    </Col> 
                                                    <Col span={24}>
                                                        <Button className='text-center w-100 text-white commn-btn bg-black radius-6 goldbtn'>
                                                            PAY NOW
                                                        </Button>
                                                    </Col> 
                                                </Row>    
                                            </Form>    
                                        </Card> 
                                    </Panel>
                                )
                            }
                        </Collapse>
                    </div>
                    )
                }
            </div>
        </div>
  )
}

export default LeftCheckoutcomp