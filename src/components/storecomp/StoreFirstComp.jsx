import React from 'react'
import { Row, Col, Space, Typography, Image, Button } from 'antd'
import { StyleRoot } from 'radium';
import ReactDOM from "react-dom";
import Coverflow from "react-coverflow";

const { Title, Text } = Typography

const StoreFirstComp = () => {

    const data = {
        title:"WELCOME TO THE WORLD OF",
        title2:"DIGITAL MUSIC COLLECTIBLES",
        sliderimg:[
            {
                img:"slider-1.png",
            },
            {
                img:"slider-2.png",
            },
            {
                img:"slider-3.png",
            },
            {
                img:"slider-4.png",
            },
            {
                img:"slider-5.png",
            },
        ],
        desciption:[
            {
                desc:"The digital collectibles are available in limited edition, can be bought, sold, listened to. They offer you an exclusive access to the music of your favorite artists and extend the experience around their universe, each series of Collectibles hides unpublished advantages which can offer access to backstage, interviews with the artist, autographs and much more..."
            },
            {
                desc:"The NFSounds ecosystem is even more extensive and has many surprises in store for you !"
            },
        ],
        bottomtext:"Get the NFSounds App and live a unique experience !"
    }

  return (
    <div className="dflex bg-signup">
        <div className="width93">
            <Row gutter={[32,32]} className='justify-center py-5'>
                <Col xs={24} sm={24} md={14} lg={16}>
                    <Space direction="vertical" className="w-100 justify-center">
                        <Space direction="vertical" size={3} className='w-100 text-center'>
                            <Title level={4} className='m-0 textshadow'>{data?.title}</Title>
                            <Title level={2}  className='m-0 textshadow'>{data?.title2}</Title>
                        </Space>
                    </Space>
                </Col>
                <Col  xs={24} sm={24} md={14} lg={16}>
                    <StyleRoot>
                        <Coverflow
                        displayQuantityOfSide={2}
                        infiniteScroll
                        media={{
                            '@media (max-width: 900px)': {
                            width: '100%',
                            height: '300px'
                            },
                            '@media (min-width: 900px)': {
                                width: '100%',
                                height: '300px'
                            }
                        }}
                        >
                            {
                                data?.sliderimg?.map((slideim,si)=>
                                <Image src={'/assets/img/'+slideim?.img} preview={false}  data-action="" key={si}/>
                                )
                            }
                        </Coverflow>
                    </StyleRoot>
                </Col>
                <Col xs={24} sm={24} md={22}>
                    <Space direction='vertical' className='w-100 text-center'>
                        {
                            data?.desciption?.map((descp,d)=>
                            <Title level={5} key={d}>
                                {
                                    descp?.desc
                                }
                            </Title>
                            )
                        }
                    </Space>
                </Col>
                <Col xs={24} sm={24} md={22}>
                    <Space direction='vertical' className='w-100 text-center'>
                        <Title level={5}>
                            {data?.bottomtext}
                        </Title>
                        <Space className='w-100 justify-center' size={10}>
                            <Button style={{background:"transparent"}}>
                                <Image src='/assets/img/google-play.png' width={'100px'} />
                            </Button>
                            <Button style={{background:"transparent"}}>
                                <Image src='/assets/img/google-play.png' width={'100px'} />
                            </Button>
                        </Space>
                    </Space>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default StoreFirstComp