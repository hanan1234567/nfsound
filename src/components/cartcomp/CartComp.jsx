import React,{ useState } from 'react'
import { Space, Avatar, Typography, Button, Input, Image } from 'antd'
import { IconMinus,IconPlus } from '@tabler/icons-react'
import './cart.css'

const { Title, Text } = Typography

const CartComp = () => {


    const [ counter, setCounter ] = useState(1)

    const IncrementCall = () => {
        setCounter(counter + 1);
    }

    const DecrementCall = () => {
        if(counter>0){
            setCounter(counter - 1);
        }
    }

    const changeHandle=(e)=>{
        setCounter(e.targe.value)
    }

    const data = {
        title:"CART.",
        cardcontent:[
            {
                img:"slider-1.png",
                title:"NINHO - Jefe",
                subtitle:"Subscription",
                amount:"20 €",
                prebtn:<IconMinus style={{width:"20px"}}/>,
                nexbtn:<IconPlus style={{width:"20px"}}/>,
                trash:'trash.png'
            },
            {
                img:"cart-2.png",
                title:"GRADUR",
                subtitle:"Subscription",
                amount:"20 €",
                prebtn:<IconMinus style={{width:"20px"}}/>,
                nexbtn:<IconPlus style={{width:"20px"}}/>,
                trash:'trash.png'
            },
            {
                img:"slider-1.png",
                title:"NINHO - Jefe",
                subtitle:"Subscription",
                amount:"20 €",
                prebtn:<IconMinus style={{width:"20px"}}/>,
                nexbtn:<IconPlus style={{width:"20px"}}/>,
                trash:'trash.png'
            },
            {
                img:"cart-2.png",
                title:"GRADUR",
                subtitle:"Subscription",
                amount:"20 €",
                prebtn:<IconMinus style={{width:"20px"}}/>,
                nexbtn:<IconPlus style={{width:"20px"}}/>,
                trash:'trash.png'
            },
            {
                img:"slider-1.png",
                title:"NINHO - Jefe",
                subtitle:"Subscription",
                amount:"20 €",
                prebtn:<IconMinus style={{width:"20px"}}/>,
                nexbtn:<IconPlus style={{width:"20px"}}/>,
                trash:'trash.png'
            },
        ]
    }

  return (
    <div className='dflex my-5'>
        <div className='width93'>
            <div direction='vertical' className='radius-12 bg-white w-100  shadow-1 parentspace'>
                {
                    data?.cardcontent?.map((cardcont,c)=>
                        <Space className='w-100 align-center-space-between py-3 px-3 cartspace' key={c}>
                            <Space size={15}>
                                <Avatar src={'/assets/img/'+cardcont?.img} shape='square' size={90} />
                                <Space direction='vertical' size={0}>
                                    <Title level={4} className='m-0 fontmbl'>{cardcont?.title}</Title>
                                    <Text>{cardcont?.subtitle}</Text>
                                    <div className='amount text-center'>
                                        <Text strong className='text-center'>{cardcont?.amount}</Text>
                                    </div>
                                </Space>
                            </Space>
                            <Space>
                                <Space.Compact block className=' radius-6 my-3 w-100px'>
                                    <Button className='custbtn prevrad bg-black text-white' onClick={DecrementCall}>
                                        {
                                            cardcont?.prebtn
                                        }
                                    </Button>
                                    <Input className='text-center' style={{borderColor:"gray"}} value={counter} onClick={changeHandle} size='large' />
                                    <Button className='custbtn nextrad bg-black text-white' onClick={IncrementCall }>
                                        {
                                            cardcont?.nexbtn
                                        }
                                    </Button>
                                </Space.Compact>
                                <span>
                                    <Image src={'/assets/img/'+cardcont?.trash} preview={false} />
                                </span>
                            </Space>
                        </Space>
                    )
                }
                
            </div>
        </div>
    </div>
  )
}

export default CartComp