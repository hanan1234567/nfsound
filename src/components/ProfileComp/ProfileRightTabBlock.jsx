import React,{ useState } from 'react'
import { Row, Col, Tabs, Button, Typography } from 'antd';
import StoreCard from '../storecomp/StoreCard';
import SettingsForm from './SettingsForm';
import SecurityForm from './SecurityForm';
import ActivityTable from './ActivityTable';
import MySubscription from './MySubscription';

const { Title } = Typography;

const ProfileRightTabBlock = () => {

    const [changetab, setChangeTab] = useState(0)
    const [colorchange, setColorChange] = useState(0)

    const data = {
        title:"Earning Reports",
        desc:"6Yearly Earnings Overview",
        tabdata:[
            {
                title:  <Button className={colorchange===0?'bg-black btn-width text-center text-white radius-12 commn-btn-2':'commn-btn-2 text-center btn-width border0 bg-transparent'} onClick={()=>setColorChange(0)}>
                                <Title level={5} className={colorchange===0?'text-white m-0':'m-0'}>Favorites</Title>
                        </Button>,
                chart: <StoreCard />
            },
            {
                title:  <Button className={colorchange===1?'bg-black btn-width text-center text-white radius-12 commn-btn-2':'commn-btn-2 text-center btn-width border0 bg-transparent'} onClick={()=>setColorChange(1)}>
                                <Title level={5} className={colorchange===1?'text-white m-0':'m-0'}>Settings</Title>
                        </Button>,
                chart:<SettingsForm />
            },
            {
                title:  <Button className={colorchange===2?'bg-black btn-width text-center text-white radius-12 commn-btn-2':'commn-btn-2 text-center btn-width border0 bg-transparent'} onClick={()=>setColorChange(2)}>
                                <Title level={5} className={colorchange===2?'text-white m-0':'m-0'}>Security</Title>
                        </Button>,
                chart:<SecurityForm />
            },
            {
                title:  <Button className={colorchange===3?'bg-black btn-width text-center text-white radius-12 commn-btn-2':'commn-btn-2 text-center btn-width border0 bg-transparent'} onClick={()=>setColorChange(3)}>
                                <Title level={5} className={colorchange===3?'text-white m-0':'m-0'}>Activity</Title>
                        </Button>,
                chart:<ActivityTable />
            },
            {
                title:  <Button className={colorchange===4?'bg-black btn-width text-center text-white radius-12 commn-btn-2':'commn-btn-2 text-center btn-width border0 bg-transparent'} onClick={()=>setColorChange(4)}>
                                <Title level={5} className={colorchange===4?'text-white m-0':'m-0'}>My subscriptions</Title>
                        </Button>,
                chart:<MySubscription />
            },
        ]
    }
  return (
    <div className='mt-5'>
        <Row className='pt-5'>
            <Col span={24} className='pt-5'>
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
  )
}

export default ProfileRightTabBlock