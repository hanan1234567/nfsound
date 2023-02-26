import React,{ useState } from 'react'
import { Avatar, Space, Typography, Button, Image } from 'antd'
import {
    IconPlayerPlayFilled,
    IconPlayerPauseFilled,
    IconMenu2,
} from '@tabler/icons-react'

const { Text } = Typography

const EliTable = () => {

    const [colorch, setColorCh] = useState(0)

    const [showicon, setShowIcon] = useState(false)



    const tabledata =[
        {
            iconplay: <IconPlayerPlayFilled/> ,
            iconpause: <IconPlayerPauseFilled/> ,
            img:"t-1.png",
            title:"Gooba",
            artist:"6ix9ine",
            rarity:"Silver",
            rdate:"12.04.23",
            time:"3:42",
            btn: <Button className='btn-width actionbtn border0 bg-transparent text-center '>
                        <Image src='/assets/img/trash.png' preview={false} width={'20px'} />
                        <IconMenu2 className={colorch?'iconwht':'iconwht'}/>
                </Button>
        },
        {
            iconplay: <IconPlayerPlayFilled/> ,
            iconpause: <IconPlayerPauseFilled/> ,
            img:"t-1.png",
            title:"Gooba",
            artist:"6ix9ine",
            rarity:"Silver",
            rdate:"12.04.23",
            time:"3:42",
            btn: <Button className='btn-width actionbtn border0 bg-transparent text-center '>
                        <Image src='/assets/img/trash.png' preview={false} width={'20px'} />
                        <IconMenu2 className={colorch?'iconwht':''}/>
                </Button>
        },
        {
            iconplay: <IconPlayerPlayFilled/> ,
            iconpause: <IconPlayerPauseFilled/> ,
            img:"t-1.png",
            title:"Gooba",
            artist:"6ix9ine",
            rarity:"Silver",
            rdate:"12.04.23",
            time:"3:42",
            btn: <Button className='btn-width actionbtn border0 bg-transparent text-center '>
                        <Image src='/assets/img/trash.png' preview={false} width={'20px'} />
                        <IconMenu2 className={colorch?'iconwht':''}/>
                </Button>
        },
    ] 


  return (
    <div className='tableResponsive'>
        <table className='w-100' cellPadding={10}>
            <thead style={{borderBottom:"2px solid #000"}}>
                <th>
                    <span></span>
                </th>
                <th>
                    <span className='fs-18 fw-500'>Title</span>
                </th>
                <th>
                    <span className='fs-18 fw-500'>Artist</span>
                </th>
                <th>
                    <span className='fs-18 fw-500'>Rarity</span>
                </th>
                <th>
                    <span className='fs-18 fw-500'>Release date</span>
                </th>
                <th>
                    <span className='fs-18 fw-500'>Time</span>
                </th>
                <th>

                </th>
            </thead>
            <tbody>
                {
                    tabledata?.map((tbdata,td)=>
                    <tr key={td} className={colorch===td?'bgchange radius-6':'radius-6'} onClick={(key)=>{setShowIcon(!showicon);setColorCh(td)}}>
                        <td className='w-200'>
                            <Space>
                                {
                                    !showicon&&
                                    <span>{tbdata?.iconplay} </span>
                                }
                                {
                                    showicon&&
                                    <span>{tbdata?.iconpause}</span>
                                }
                                <Avatar shape='square' size={64} src={'/assets/img/'+tbdata?.img} />
                            </Space>
                        </td>
                        <td>
                            <Text strong>{tbdata?.title}</Text>
                        </td>
                        <td>
                            <Text strong>{tbdata?.artist}</Text>
                        </td>
                        <td>
                            <Text strong>{tbdata?.rarity}</Text>
                        </td>
                        <td>
                            <Text strong>{tbdata?.rdate}</Text>
                        </td>
                        <td>
                            <Text strong>{tbdata?.time}</Text>
                        </td>
                        <td className='w-100px'>
                            {
                                tbdata?.btn
                            }
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default EliTable