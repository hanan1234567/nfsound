import React,{ useState } from 'react'
import { Image, Button, Space, Input, Typography } from 'antd'
import './navbarcs.css'
import { NavLink } from 'react-router-dom'
import { 
    IconSearch
} from '@tabler/icons-react'

const { Text, Title } = Typography

const Navbarnfs = () => {

    const [showmenu, setShowMenu] = useState(false)
    const [logshow, setLogShow ] = useState(false)
  return (
    <div className='justify-center'>
        <div className='widthnav borderbottom'>
            <div className='mainNavbar'>
                <div className='navBar'>
                    <div>
                        <NavLink to='/'>
                            <Image src='/assets/img/logo.png' preview={false} className='sizelogo' />
                        </NavLink>
                    </div>
                    <div className={showmenu?'menubar active':'menubar hide'}>
                        <div className='closemenu'>
                            <Title level={4} className='m-0'>Menu.</Title>
                            <Button className='border0 bg-transparent p-0'  onClick={() => {setShowMenu(!showmenu) }} size='middle' >
                                <Image src='/assets/img/close.png' width={'30px'} preview={false} />
                            </Button>
                        </div>
                        <ul>
                            <li>
                                <NavLink to='/store' className='fs-14'>
                                    Store
                                </NavLink>    
                            </li>    
                            <li>
                                <NavLink to='/collection' className='fs-14'>
                                    Collection
                                </NavLink>    
                            </li>    
                            <li>
                                <NavLink to='/musicall' className='fs-14'>
                                    music
                                </NavLink>    
                            </li>    
                            <li>
                                <NavLink to='/artist' className='fs-14'>
                                    artists
                                </NavLink>    
                            </li>   
                            <li>
                                <NavLink to='/marketplace' className='fs-14'>
                                    MarketPlace
                                </NavLink>    
                            </li>                    
                        </ul>
                        {
                            logshow&&
                            <div className='profilepic'>
                                <Image src='/assets/img/signup-img.png' preview={false} />
                            </div>
                        }
                        <div className='btnsmbleLog'>
                            <Space className='w-100' direction='vertical'> 
                                <Button className={logshow?'bg-black text-white w-100 shadow radius-12':'bg-white w-100 border0 shadow radius-12'} size='large'>
                                        {
                                            logshow?'PROFILE':'SIGN UP'
                                        }
                                </Button>
                                <Button className={logshow?'bg-white w-100 border0 fw-600 text-red shadow radius-12':'bg-black w-100 text-white radius-12'} size='large'
                                    onClick={()=>setLogShow(!logshow)}
                                    >
                                        {
                                            logshow?'LOG OUT':'LOG IN'
                                        }
                                </Button>
                            </Space>
                        </div>
                    </div>
                </div>
                <Space className='w-100 justify-end'>                    
                    <Input 
                        
                        size="middle" 
                        className='radius-12' 
                        placeholder="Search" 
                        prefix={<IconSearch style={{width:"15px"}} />} /> 
                    {
                        logshow&&
                        <Space  >
                            <Button className='border0 bg-transparent p-0' size='middle' >
                                <NavLink to='/cart'>
                                    <Image src='/assets/img/carticon.png' width={'20px'} preview={false} />
                                </NavLink>
                            </Button>
                            <Button className='border0 bg-transparent p-0' size='middle' >
                                <Image src='/assets/img/notifyicon.png' width={'20px'} preview={false} />
                            </Button>
                            <div onClick={()=>setLogShow(!logshow)}>
                                <Image src='/assets/img/signup-img.png' width={'40px'} preview={false} />
                            </div>
                        </Space>
                    }
                    {
                        !logshow&&
                        <Space  >
                            <NavLink to='/'>
                                <Text strong className='whitespace'>Log In</Text>
                            </NavLink>
                            <Button className='bg-black text-white radius-12 p-1' size='middle'>
                                <NavLink to='/signup' className='text-white px-2'>Sign Up</NavLink>
                                <span onClick={()=>setLogShow(!logshow)}>+</span>
                            </Button>
                        </Space>
                    }
                    <div className='hamburger'>
                        <Button className='bg-transparent border0 p-0' onClick={() => {setShowMenu(!showmenu) }} size='middle'>
                            <Image src='/assets/img/hammenu.png' preview={false} width={30} />
                        </Button>
                    </div>
                </Space>
            </div>
        </div>
    </div>
  )
}

export default Navbarnfs