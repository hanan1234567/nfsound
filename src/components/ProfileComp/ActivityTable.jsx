import React from 'react'
import { Col, Row, Table, Typography } from 'antd'
import './profile.css'

const { Text } = Typography

const ActivityTable = () => {

    const columns = [
        {
            title: 'Sale / Purchase',
            dataIndex: 'salep',
            key: 'salep',
        },
        {
            title: 'Item',
            dataIndex: 'item',
            key: 'item',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
      ];
      const data = [
        {
            key: '1',
            salep: <Text strong className='textgreen'>Purchase</Text>,
            item: 'Gooba - 6ix9ine',
            amount: '100 €',
            date:"01.12.22"
        },
        {
            key: '2',
            salep: <Text strong className='text-red'>Sale</Text>,
            item: 'Extraterrestre - Jul',
            amount: '50 €',
            date:"18.12.22"
        },
        {
            key: '3',
            salep: <Text strong className='textgreen'>Purchase</Text>,
            item: 'Du propre! - Orelsan',
            amount: '88 €',
            date:"28.12.22"
        },
        {
            key: '4',
            salep: <Text strong className='text-red'>Sale</Text>,
            item: 'Dior – Pop Smoke',
            amount: '254 €',
            date:"08.01.22"
        },
      ];


  return (
    <div>
        <Row>
            <Col span={24}>
                <Table 
                    className='tablebg'
                    columns={columns} 
                    dataSource={data} 
                    scroll={{
                        x:700
                    }}
                />
            </Col>
        </Row>
    </div>
  )
}

export default ActivityTable