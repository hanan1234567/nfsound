import React,{ useState } from 'react'
import { Col, Row, Tabs, Button, Typography } from 'antd'
import FeedCards from './FeedCards'
import ArtistCollectiblesCards from './ArtistCollectiblesCards'
import ArtistLiveChat from './ArtistLiveChat'

const { Title } = Typography

const ArtistFeedTabs = () => {

    const [changetab, setChangeTab] = useState(0)
    const [colorchange, setColorChange] = useState(0)

    const data = {
        tabdata:[
            {
                title:  <Button className={colorchange===0?'bg-black w-100 text-center text-white radius-6 commn-btn':'commn-btn text-center w-100 border0 bg-transparent radius-6'} onClick={()=>setColorChange(0)}>
                                <Title level={5} className={colorchange===0?'text-white m-0':'m-0'}>FEED</Title>
                        </Button>,
                chart:<FeedCards />
            },
            {
                title:  <Button className={colorchange===1?'bg-black w-100 text-center text-white radius-6 commn-btn':'commn-btn text-center w-100 border0 bg-transparent radius-6'} onClick={()=>setColorChange(1)}>
                                <Title level={5} className={colorchange===1?'text-white m-0':'m-0'}>COLLECTIBLES</Title>
                        </Button>,
                chart:<ArtistCollectiblesCards />
            },
            {
                title:  <Button className={colorchange===2?'bg-black w-100 text-center text-white radius-6 commn-btn':'commn-btn text-center w-100 bg-transparent border0 radius-6'} onClick={()=>setColorChange(2)}>
                                <Title level={5} className={colorchange===2?'text-white m-0':'m-0'}>LIVE CHAT</Title>
                        </Button>,
                chart:<ArtistLiveChat />
            },
        ]
    }

  return (
    <div className='justify-center py-5 gradient-bg'>
        <div className='width93'>
            <Row gutter={[16,16]}>
                <Col span={24}>
                    <Tabs className='tabcss tabcrm tabbtn' centered>
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

export default ArtistFeedTabs