import React,{ useState } from 'react'
import { Col, Row, Space, Tabs, Image, Button, Typography } from 'antd'
import './musicall.css'
import MusicTable from './MusicTable'
import EliTable from './EliTable'
import {
    IconBrandYoutube
} from '@tabler/icons-react'

const { Title } = Typography

const MusicAllComp = () => {

    const [changetab, setChangeTab] = useState(0)
    const [colorchange, setColorChange] = useState(0)
    const [showy, setShowy] = useState(true)

    const data = {
        title:"Earning Reports",
        desc:"6Yearly Earnings Overview",
        tabdata:[
            {
                title:  <Button className={colorchange===0?'bg-black btn-width text-white radius-6 commn-btn':'commn-btn brand-border btn-width radius-6'} onClick={()=>{setColorChange(0);setShowy(!showy)}}>
                            <Space className='w-100 center' size={15}>
                                {
                                    showy&&
                                    <Image src='/assets/img/music.png' preview={false} />
                                }
                                {
                                    !showy&&
                                    <span><IconBrandYoutube/></span>
                                }
                                <Title level={5} className={colorchange===0?'text-white m-0':'m-0'}>All music</Title>
                            </Space>
                        </Button>,
                chart:<MusicTable />
            },
            {
                title:  <Button className={colorchange===1?'bg-black btn-width text-center text-white radius-6 commn-btn':'commn-btn brand-border text-center btn-width radius-6'} onClick={()=>{setColorChange(1);setShowy(false)}}>
                                <Title level={5} className={colorchange===1?'text-white m-0':'m-0'}>Create playlist</Title>
                        </Button>,
                chart:<MusicTable />
            },
            {
                title:  <Button className={colorchange===2?'bg-black btn-width text-center text-white radius-6 commn-btn':'commn-btn brand-border text-center btn-width radius-6'} onClick={()=>{setColorChange(2);setShowy(false)}}>
                                <Title level={5} className={colorchange===2?'text-white m-0':'m-0'}>Elie 2</Title>
                        </Button>,
                chart:<EliTable />
            },
            {
                title:  <Button className={colorchange===3?'bg-black btn-width text-center text-white radius-6 commn-btn':'commn-btn brand-border text-center btn-width radius-6'} onClick={()=>{setColorChange(3);setShowy(false)}}>
                                <Title level={5} className={colorchange===3?'text-white m-0':'m-0'}>Rap</Title>
                        </Button>,
                chart:<MusicTable />
            },
            {
                title:  <Button className={colorchange===4?'bg-black btn-width text-center text-white radius-6 commn-btn':'commn-btn brand-border text-center btn-width radius-6'} onClick={()=>{setColorChange(4);setShowy(false)}}>
                                <Title level={5} className={colorchange===4?'text-white m-0':'m-0'}>Sport</Title>
                        </Button>,
                chart:<MusicTable />
            },
            {
                title:  <Button className={colorchange===5?'bg-black btn-width text-center text-white radius-6 commn-btn':'commn-btn brand-border text-center btn-width radius-6'} onClick={()=>{setColorChange(5);setShowy(false)}}>
                                <Title level={5} className={colorchange===5?'text-white m-0':'m-0'}>Chill Mood</Title>
                        </Button>,
                chart:<MusicTable />
            },
        ]
    }

  return (
    <div className='justify-center py-5 gradient-bg'>
        <div className='width93'>
            <Row gutter={[16,16]}>
                <Col span={24}>
                    <Tabs className='tabcss tabcrm tabbr' centered>
                        {
                            data?.tabdata?.map((tdata,td)=>
                                <Tabs.TabPane tab={tdata?.title}  key={td} onClick={(key)=>setChangeTab(key)}>
                                    {tdata?.chart}
                                </Tabs.TabPane>
                            )
                        }                    
                    </Tabs>
                </Col>  
            </Row>
        </div>
    </div>
  )
}

export default MusicAllComp