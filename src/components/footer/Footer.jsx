import React, { useState } from 'react'
import { Row, Col, Space, Typography, Image, Dropdown } from 'antd'
import './footer.css'
import { NavLink } from 'react-router-dom'
import {
    IconChevronDown,
    IconChevronUp,
    IconSunFilled
} from '@tabler/icons-react'

const { Title, Text } = Typography

const Footer = () => {

    const [updown, setUpDown] = useState(0)

    const items = [
        {
          label: <a href="/">
                    <Space className='w-100'>
                        <Image src='/assets/img/flag.png' width={'25px'} />
                        <Text className='fs-12'>French</Text>
                    </Space>
                </a>,
          key: '0',
        },
        {
          label: <a href="/">
                    <Space className='w-100'>
                        <Image src='/assets/img/flag.png' width={'25px'} />
                        <Text className='fs-12'>French</Text>
                    </Space>
                </a>,
          key: '1',
        },
        {
          label: <a href="/">
                    <Space className='w-100'>
                        <Image src='/assets/img/flag.png' width={'25px'} />
                        <Text className='fs-12'>French</Text>
                    </Space>
                </a>,
          key: '3',
        },
      ];

    const data = {
        logof:"logo.png",
        listin:[
            {
                title:"Explore Us",
                innerlist:[
                    {
                        lst:<NavLink className='dim-color' to='/store'>Store</NavLink>
                    },
                    {
                        lst:<NavLink className='dim-color' to='/store'>About Us</NavLink>
                    },
                    {
                        lst:<NavLink className='dim-color' to='/store'>FAQ/TOU</NavLink>
                    }
                ]
            },
        ]
    }
  return (
    <div className='justify-center'>
        <div className='width93 py-4' style={{borderTop:"1px solid #000"}}>
            <Row gutter={[16,16]} className='rowcenter'>

                <Col span={8} className='dblk'>
                    <Dropdown
                            
                            menu={{
                            items,
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()} className='text-black'> 
                                <Space onClick={()=>setUpDown(!updown)}>
                                    <Text className='fs-12'>Explore Us</Text>
                                    {
                                        updown?<IconChevronUp style={{width:"14px"}} />
                                        :
                                        <IconChevronDown style={{width:"14px"}} />
                                    }
                                </Space>
                            </a>
                    </Dropdown>
                </Col>
                <Col span={8} className='dblk'>
                    <Dropdown
                            menu={{
                            items,
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()} className='text-black'> 
                                <Space onClick={()=>setUpDown(!updown)}>
                                    <Image src='/assets/img/flag.png' width={'20px'} />
                                        <Text className='fs-12'>French</Text>
                                    {
                                        updown?<IconChevronUp style={{width:"14px"}} />
                                        :
                                        <IconChevronDown style={{width:"14px"}} />
                                    }
                                </Space>
                            </a>
                    </Dropdown>
                </Col>
                <Col span={8} className='dblk'>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()} className='text-black'> 
                            <Space onClick={()=>setUpDown(!updown)}>
                                <IconSunFilled style={{width:"14px"}} />
                                    <Text className='fs-12'>Light</Text>
                                {
                                    updown?<IconChevronUp style={{width:"14px"}} />
                                    :
                                    <IconChevronDown style={{width:"14px"}} />
                                }
                            </Space>
                        </a>
                    </Dropdown>
                </Col>
                <Col xs={24} sm={24} md={24} lg={10} className='dnone'>
                    <Image src={'/assets/img/'+data?.logof} width={'100px'} className='mxm-5' />
                </Col>
                {
                    data?.listin?.map((listdat,ld)=>
                    <Col xs={24} sm={24} md={24} lg={4} key={ld} className='dnone'>
                        <Space direction='vertical'>
                            <Title level={4} className='m-0'>{listdat?.title}</Title>                            
                            <ul className='ulist'>
                                {
                                    listdat?.innerlist?.map((innerlst,d)=>
                                        <li>
                                            {innerlst?.lst}
                                        </li>
                                
                                    )
                                }
                             </ul>
                        </Space>
                    </Col>
                    )
                }

                <Col xs={24} sm={24} md={24} lg={4}>
                    <Space direction='vertical'>
                        <Title level={4} className='m-0'>Join Us</Title>                            
                        <ul className='ulist'>
                            <li>
                                <Space>
                                    <NavLink className='dim-color' to='/store'><Image src='/assets/img/twitter.png' preview={false}/></NavLink>
                                    <NavLink className='dim-color' to='/store'><Image src='/assets/img/insta-1.png' preview={false}/></NavLink>
                                </Space>
                            </li>
                        </ul>
                    </Space>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6}>
                    <Space direction='vertical'>
                        <Title level={4} className='m-0'>Download NFTSound App</Title>                            
                        <Space className='w-100' size={14}>
                            <Image src='/assets/img/qr.png' preview={false} width={'90px'} className='shadow-1 radius-12 px-2 py-2' />
                            <Space className='w-100' size={30} direction='vertical'>
                                <Space className='w-100'>
                                    <Image src='/assets/img/apple-logo.png' />
                                    <Text strong>App Store</Text>
                                </Space>
                                <Space className='w-100'>
                                    <Image src='/assets/img/google-play-icon.png' />
                                    <Text strong>Google Play</Text>
                                </Space>
                            </Space>
                        </Space>
                    </Space>
                </Col>
                <Col xs={24} sm={24} md={24} lg={14}>
                    <Space className='w-100 space-end-align' size={30}>
                       <div className='dnone'>
                            <Dropdown
                                    className='radius-6 shadow-1 py-2 px-2'
                                    menu={{
                                    items,
                                    }}
                                    trigger={['click']}
                                >
                                    <a onClick={(e) => e.preventDefault()} className='text-black'> 
                                        <Space onClick={()=>setUpDown(!updown)}>
                                            <Image src='/assets/img/flag.png' width={'25px'} />
                                                <Text className='fs-12'>French</Text>
                                            {
                                                updown?<IconChevronUp style={{width:"14px"}} />
                                                :
                                                <IconChevronDown style={{width:"14px"}} />
                                            }
                                        </Space>
                                    </a>
                            </Dropdown>
                       </div>
                        <Text>
                            Copyright .Allright Reserved .NFSounds
                        </Text>
                        <div className='dnone'>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <a onClick={(e) => e.preventDefault()} className='text-black'> 
                                    <Space onClick={()=>setUpDown(!updown)}>
                                        <IconSunFilled style={{width:"14px"}} />
                                            <Text className='fs-12'>Light</Text>
                                        {
                                            updown?<IconChevronUp style={{width:"14px"}} />
                                            :
                                            <IconChevronDown style={{width:"14px"}} />
                                        }
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </Space>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Footer