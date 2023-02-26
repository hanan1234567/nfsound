import React,{ useState, useEffect } from 'react'
import { Row, Col, Space, Typography, Input, Card, Image, notification, Spin } from 'antd';
import {
    IconSearch
} from '@tabler/icons-react'
import './artist.css'

const { Title, Text } = Typography

const TextTop = () => {





    const[loading,setLoading] = useState(false)
    const[clientdetails, setClientDetails] = useState([]);



useEffect(() => {
    apiCall()
}, [])


const domainUrl2 = "http://nfsound.replatechnologies.com/api/GetArtist";

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
            setClientDetails(result?.data)
             setLoading(false)
          })
          .catch(error => {alert("error")})

}


const openNotification = (success,message,description) => {
  notification[success]({
    message: message,
    description: description
  });
}

    const data = {
        title:"GET CLOSER TO YOUR FAVOURITE ARTIST !",
        desc:"Search for an artist, subscribe and get access to new content.",
        desc1:"Get a little closer to the artist's inner circle by chatting in his or her private chat, interacting with his or her content and trying to access exclusive rewards and experiences designed by the artist for his or her community.",
        cardsm:[
            {   
                img:"gradur.png",
                title:"GRADUR"
            },
            {   
                img:"sm-2.png",
                title:"DJSNAKE"
            },
            {   
                img:"sm-3.png",
                title:"ORELSAN"
            },
            {   
                img:"sm-4.png",
                title:"NINHO"
            },
            {   
                img:"sm-5.png",
                title:"TRAVIS SCOTT"
            },
            {   
                img:"sm-6.png",
                title:"NAZA"
            },
            {   
                img:"sm-7.png",
                title:"ANGÈLE"
            },
            {   
                img:"sm-8.png",
                title:"FRANGLISH"
            },
            {   
                img:"sm-9.png",
                title:"DADJU"
            },
        ]
    }
  return (
    <div className='justify-center gradient-bg'>
        <div className='width93  py-5'  style={{borderBottom:"1px solid #000"}}>
            <Row gutter={[32,32]}>
                <Col span={24}>
                    <div className='w-50s'>
                        <Space className='100 text-center' direction='vertical' size={15}>
                            <Title level={1}>{data?.title}</Title>
                            <Title level={4}>{data?.desc}</Title>
                            <Title level={4}>{data?.desc1}</Title>
                            <Input size="large" className='w-100 radius-6 commn-btn' placeholder="Search artist" prefix={<IconSearch />} />
                        </Space>
                    </div>
                </Col>
                {
                    clientdetails?.map((carm,cs)=>
                    <Col xs={24} sm={12} md={8} lg={6} key={cs}>
                        <Card className='bg-black radius-12 position-relative p-0 cardsm overflow-hidden'
                            cover={
                                <Image src={carm.image} style={{width:"90px",height:"90px"}} preview={false} />
                            }
                        >
                            
                            <div className='overImageText w-100 text-center'>
                                <Title level={2} className='text-white'>
                                    {carm?.name}
                                </Title>
                            </div>
                        </Card>
                        
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

export default TextTop