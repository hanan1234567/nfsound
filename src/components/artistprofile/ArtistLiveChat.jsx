import React from 'react'
import { Row, Col, Typography, Card, Space, Input, Button } from 'antd'

const { Title, Text } = Typography

const ArtistLiveChat = () => {

    const data = [
        {
            author:"John59320:",
            msg:"Salut le squad, vous avez entendu parler du dernier album de Gradur qui drop sur NFS?"
        },
        {
            author:"Emily:",
            msg:"Ouais! Il est incroyable! Je l’ai choppé lors de la sortie hier"
        },
        {
            author:"Mike253$:",
            msg:"Moi aussi, c’est vraiment une réussite. Il a frappé fort sur ce coup. En plus il est déjà sold out, j’espère gagner une rencontre avec lui."
        },
        {
            author:"Nabil92130:",
            msg:"De ouf! Image tu tape un five avec lui c’est dingue, ou un combat de Cyril Gane haha"
        },
        {
            author:"John59320:",
            msg:"J’ai la haine j’ai pas eu le temps de prendre le miens j’étais en cours et en plus la marketplace est pas encore ouverte :("
        },
        {
            author:"Nabil92130:",
            msg:"En vrai j’ai hésité à acheter car 20€ c’est quand même un budget mais ça vaut le coup,déjà tu te sens impliqué et en plus tu peux gagner grave des trucs que tu pourrais pas avoir ailleurs. Je kiff le concept."
        },
        {
            author:"Emily:",
            msg:"Carrément! Et puis de ce qui se dit une version streaming 3.0 va sortir sur NFSounds et genre si tu possède tel collectible d’un artiste tu vas gagner aussi es revenues selon le succès des morceaux que tu possède. J’ai hâte de voir ce que ça va donner."
        },
    ]
  return (
    <div>
        <Row gutter={[16,16]}>
            <Col span={24}>
                <Card className='shadow-2 radius-12'>
                    <Space direction='vertical' size={10} className='spacheight'>
                        {
                            data?.map((dat,d)=>
                            <Space size={10} key={d}>
                                <Title level={3} className='brand-color m-0'>
                                    {
                                        dat?.author
                                    }
                                </Title>
                                <Title level={4} className='m-0'>
                                    {
                                        dat?.msg
                                    }
                                </Title>
                            </Space>
                            )
                        }
                    </Space>
                    <Space className='w-100 borderGold spacfirst radius-6 py-1 px-1'>
                        <Input className='border0 w-100' />
                        <Button className='bg-black commn-btn-2 px-4 fs-18 py-0 text-white radius-6' size='small'>SEND</Button>
                    </Space>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default ArtistLiveChat