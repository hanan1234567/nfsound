import React,{ useState, useEffect } from 'react'
import { Card, Space, Image, Typography, Input, Button, Row, Col, notification, Spin } from 'antd'
import { NavLink } from 'react-router-dom'

const { Title, Text } = Typography

const NewsComp = () => {

    const[loading,setLoading] = useState(false)
    const[timeline, setTimeline] = useState([]);



useEffect(() => {
    apiCall()
}, [])


const domainUrl2 = "http://nfsound.replatechnologies.com/api/timeLine";

const apiCall = () => {
      setLoading(true)
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMWUzMDhmYTJiOWFhM2Y2MjcwMTM5NjViZjNlNWYyNDQzMWQ5ZmY5YzIxYTY4ZjU4ZjMxMDE4OTUyMTI4MGEyMDE2MzdjN2M3MjJjNDk0ZDgiLCJpYXQiOjE2NzcxNTc1NDEuMTg4NDg4LCJuYmYiOjE2NzcxNTc1NDEuMTg4NDkxLCJleHAiOjE3MDg2OTM1NDEuMTgyNTI5LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.eB70Nsxv3GAYkDObF-3q4ctSq788EvWprAtSpLUp9RhjNyHNSPoN0Wtib60emuAbrpC-NOsceD8gZeTNnODHuOkqdR3unn3vNFq2qj83zIZ-11x-S3stKaRJVPsMBAxlTLsJHF2FYpJz4BdTAT4sqnSPrpoUXS9pTyiMfNPZPdzs1DY-of3dkhoD5-uzxGVSoEHGrxBOoZFJ-ge0upm9uWYfE-XncEdSunIlOU0jPWgu8MBduEaX39CZMMivkPdgdNOjISb4JIlNZ-3vdAvrQG-gPrWyFXTssS_gnhjNWXBjLqKdRTRaikceY6Oh97GmYhczbgB8xPiDEaC5ufkiC4qHUQRLT7oY3HdbdgevY1xYlBfcNyHILvHYfj0whGvs2l_SxvBIkTJcfLEz1k1GBPl4lXp4_8E7Oy1nsxY5fH_7YcJ03eWGwWJslhte0TKar-oazVg_210PelUXvkYdmM356d6-4snNaU_ukJd_sCbDqiDMZLgvjr22wOtAFDtTv8vYPDKyQvwNVF2ae1WRLlzim9dS2V4X1l9o2sLmgkGlT1roG2sqcdA1WNusj80HsTvm0XBgNnUbGrjAOUEGgHSGDO9MAm4omwi_hRuyCZShiUeFB52z54f9iRnBCSEW5TSoXGx_8OCe5pfQup7AFz6AZu7u9OG8x-lfm-YkyFQ`);
      var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
      };
      fetch(domainUrl2, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log("result", result);
            setTimeline(result?.data)
             setLoading(false)
          })
          .catch(error => {alert("error")})

}


    const data = {
        title:"NEWS.",
        carddata:[
            {
                carimg:"card-1.png",
                heart:"red-heart.png",
                likes:"96",
                commentsicon:"comments.png",
                commentstext:"34",
                subtitle:"Nfsounds",
                check:"fillcheck.png",
                subtext:"New song out now !",
                subtext2:"before the sold out",
                showComents:"Show all comments",
                sendtext:"Send"
            },
            {
                carimg:"newc-1.png",
                heart:"red-heart.png",
                likes:"76",
                commentsicon:"comments.png",
                commentstext:"56",
                subtitle:"Nfsounds",
                check:"fillcheck.png",
                subtext:"New song out now ! Grab it",
                subtext2:"before the sold out",
                showComents:"Show all comments",
                sendtext:"Send"
            },
            {
                carimg:"newc-2.png",
                heart:"red-heart.png",
                likes:"54",
                commentsicon:"comments.png",
                commentstext:"21",
                subtitle:"Nfsounds",
                check:"fillcheck.png",
                subtext:"New song out now ! Grab it",
                subtext2:"before the sold out",
                showComents:"Show all comments",
                sendtext:"Send"
            },
            {
                carimg:"newc-3.png",
                heart:"red-heart.png",
                likes:"96",
                commentsicon:"comments.png",
                commentstext:"34",
                subtitle:"Nfsounds",
                check:"fillcheck.png",
                subtext:"New song out now !",
                subtext2:"before the sold out",
                showComents:"Show all comments",
                sendtext:"Send"
            },
            {
                carimg:"newc-4.png",
                heart:"red-heart.png",
                likes:"96",
                commentsicon:"comments.png",
                commentstext:"34",
                subtitle:"Nfsounds",
                check:"fillcheck.png",
                subtext:"New song out now !",
                subtext2:"before the sold out",
                showComents:"Show all comments",
                sendtext:"Send"
            },
            {
                carimg:"newc-5.png",
                heart:"red-heart.png",
                likes:"96",
                commentsicon:"comments.png",
                commentstext:"34",
                subtitle:"Nfsounds",
                check:"fillcheck.png",
                subtext:"New song out now !",
                subtext2:"before the sold out",
                showComents:"Show all comments",
                sendtext:"Send"
            },
        ]
}

  return (
    <div className='justify-center py-5'>
        <div className='width93'>
            <Row gutter={[32,32]}>
                <Col span={24}>
                    <Title level={1} className='m-0'>{data?.title}</Title>
                </Col>
            {
                timeline.map((cardd,dt)=>
                <Col xs={24} sm={24} md={12} lg={8} key={dt}>
                   <NavLink to='/artistprofile' className='text-white'>
                        <Card className='cardnw radius-12 shadow-1 h-100'>                        
                            <Image src={cardd?.image} preview={false} />
                            <Space size={5} direction='vertical' style={{paddingTop:"20px"}}>
                                <Space className='w-100' size={10}>
                                    <Space size={4}>
                                        <Image src={'/assets/img/'+cardd?.heart} width={'20px'} preview={false} />
                                        <Title className='m-0' level={5}>{cardd?.likes}</Title>
                                    </Space>
                                    <Space size={4}>
                                        <Image src={'/assets/img/'+cardd?.commentsicon} width={'20px'} preview={false} />
                                        <Title className='m-0' level={5}>{cardd?.commentstext}</Title>
                                    </Space>
                                </Space>
                                <Space className='w-100' size={10}>
                                    <Space size={4}>
                                        <Title className='m-0' level={5}>{cardd?.post}</Title>
                                        <Image src={'/assets/img/'+cardd?.check} width={'14px'} preview={false} />
                                    </Space>
                                    <Title className='m-0' level={5}>{cardd?.description}</Title>
                                </Space>
                                
                                <div className='descrp'>
                                    <Title level={5} className='m-0'>{cardd?.subtext2}</Title>
                                </div>
                            </Space>
                            <Space direction='vertical' className='w-100' size={0} style={{paddingTop:"15px"}}>                            
                                <Text className='m-0 fs-12 dim-color' level={5}>{cardd?.showComents}</Text>
                                <Space className='w-100 borderGold spacfirst radius-6 py-1 px-1'>
                                    <Input className='border0 w-100' />
                                    <Button className='bg-black smallbtn text-white radius-6' size='small'>Send</Button>
                                </Space>
                            </Space>
                        </Card>
                   </NavLink>
                </Col>
                )
            }
            {
                    loading? <Spin style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-70%)"}}  />:apiCall
                }
            </Row>
        </div>
    </div>
  )
}

export default NewsComp