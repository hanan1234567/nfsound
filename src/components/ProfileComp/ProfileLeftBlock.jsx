import React from 'react'
import { Space, Image, Typography } from 'antd'

const { Title } = Typography

const ProfileLeftBlock = () => {
  return (
    <div>
        <Space direction='vertical' className='text-center w-100'>
            <Image src='/assets/img/signup-img.png' preview={false} width={'250px'} />
            <Title level={1}>Elie Test</Title>
        </Space>
    </div>
  )
}

export default ProfileLeftBlock