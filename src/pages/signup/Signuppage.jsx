import React,{ useState } from 'react'
import { Col, Row, Typography, Space, Form, Button, Input, Image, notification } from "antd";

import './signup.css'

const { Title } = Typography

const Signuppage = () => {

    const fileRef = React.useRef() 
    const [state, setState] = useState(null)
  const selectFile = () => {
    fileRef.current.click()
}


    const [register, setRegister]= useState({
        firstName: '',
        lastName: "",
        dob: "",
        userName: "",
        email: "",
        password: "",
        country: "",
        city: "",
        zipcode:"",
        address:"",
        phone:"",
        image:"",
        status: "enable",
  })     
  const RegisterUser=()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiN2M3M2Q1ZjFlN2M5ZTI3OWVmZDVjODE1Njk0ODM4MjhmMDViNjE2MTEwY2YzMjUyYTRhNjJlNjgwOGRiNGU2OWVlYzNjOTU3ZGMxZDdmMTciLCJpYXQiOjE2NzcxNDA5NzQuNDQ0MDQ1LCJuYmYiOjE2NzcxNDA5NzQuNDQ0MDU0LCJleHAiOjE3MDg2NzY5NzQuMTY4MjE2LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.I-uyOMaimHoJEaWFqmWHI8RzDsXkyEV368camDsmHOuKN-iJSVjmGyztKTIqZA3zwfazdFM-zmpH1Di4j6W1AQllDwoggsz458cbQj4O0EvPMlqbdPxarwYa49kJ-AOP9nxGyRdF7u4XpcMx14Nj5wQRgFxYSjedf3n7DIwxz-I-5YcaNInTqCvi7IslsZirY7Vh6aI3ruVgr_JgpgeFpfHH9X9tQU6Fm-PD9XgivZKtLeQIxJUypFxSWrxolEiMNYH_CCMKvJpolQIMwlC7uxcHzaOVcdWeHxm7pOkVYf0Hp9okWvywHPos_v6BUhGyvWS03yFvgRKRmFgN-AHs6M2ZuBavTr_l7usEx5G8XlCc0IDWjs4c7GGdtaUfdpIA3NkESFwwjet4mwnDd7b34k-hd9cOcxv_5GEe9MPHOSuLeBmRpMIp0ZsTFES9r0DgS8e1YZGccLsNXiyyBRERgzhVdkKjXl5IuvpGaWqQya96eWxGzEA5h6pTSxf4tXZvcH1TEoiV3gBlX9IzWSqygEZqPJmLaTLpJ6eE6xKKVHXc1WKajueBEccqrQawwoovbSZ3MV1zMNwRQ876kXsQ5vUWF7UrlxR7QSjMYt_htmmwO6xLyGLrwZv3scB_RX8HlO9G06vdzI276aJidJUjwyeUt6NQDYhv3wUgYHCPJE8`);
    myHeaders.append("Content-Type", "application/json")
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body:JSON.stringify(register),
        redirect: 'follow'
    }
    fetch('http://nfsound.replatechnologies.com/api/UserRegister', requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        if(result?.success===true)
            {
                console.log("result", result)     
                addItem('success');          
            }
        else
        {
            throw  'error'
        }
    })
    .catch(error => {alert(error)})
  }

  const addItem = (success) => {
    notification[success]({
      message: 'Alert',
      description:
        'Item has been Added Successfully',
    });
  }

  const handleFileChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];   
    reader.onloadend = () => {
        setState({
            file: file,
            preview: reader.result
        })            
    }
    if(file)
    reader.readAsDataURL(file)
    }
  return (
    <div className="dflex bg-signup py-5">
        <div className="width93">
            <Row gutter={[32,32]}>
                <Col span={24}>
                    <Title level={2}>SIGN UP.</Title>
                </Col>
                <Col span={24}>
                    <Row gutter={[16,10]} className='justify-center my-5'>
                        <Col xs={24} sm={24} md={14} lg={10}>
                            <Space direction="vertical" className="w-100 justify-center">
                                
                                <Form layout="vertical">
                                    <Row gutter={[16,16]}>
                                        <Col span={24}>
                                            <div direction="vertical" size={3} className='w-100 text-center maindiv'>   
                                            <input type="file"  ref={fileRef} onChange={(e) => handleFileChange(e)} className='dnon' accept=".png, .jpg, .jpeg" />                                             
                                                    <Image src={state?.preview ||'/assets/img/signup-img.png'} preview={false} width={'150px'} />
                                                
                                                <div className='editbtn'>
                                                
                                                    <label for='upload'  onClick={(e) => selectFile() } >
                                                        <Image src='/assets/img/editpen.svg' preview={false} />
                                                    </label>
                                                </div>
                                            </div>
                                            
                                        </Col>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item label='First name' className="fw-500">
                                                <Input className='w-100 radius-6' size='large' 
                                                    value={register?.firstName || ''}
                                                    onChange={(e)=>{
                                                        setRegister({
                                                            ...register,
                                                            firstName:e.target.value
                                                        })
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item label='Last name' className="fw-500">
                                                <Input className='w-100 radius-6' size='large' 
                                                    value={register?.lastName || ''}
                                                    onChange={(e)=>{
                                                        setRegister({
                                                            ...register,
                                                            lastName:e.target.value
                                                        })
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item label='Date of birth' className="fw-500">
                                                <Input className='w-100 radius-6' size='large' 
                                                    value={register?.dob || ''}
                                                    onChange={(e)=>{
                                                        setRegister({
                                                            ...register,
                                                            dob:e.target.value
                                                        })
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item label='Username' className="fw-500">
                                                <Input className='w-100 radius-6' size='large' 
                                                    value={register?.userName || ''}
                                                    onChange={(e)=>{
                                                        setRegister({
                                                            ...register,
                                                            userName:e.target.value
                                                        })
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item label='Phone' className="fw-500">
                                                <Input className='w-100 radius-6' size='large' 
                                                    value={register?.phone || ''}
                                                    onChange={(e)=>{
                                                        setRegister({
                                                            ...register,
                                                            phone:e.target.value
                                                        })
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item label='Email' className="fw-500">
                                                <Input className='w-100 radius-6' size='large' 
                                                    value={register?.email || ''}
                                                    onChange={(e)=>{
                                                        setRegister({
                                                            ...register,
                                                            email:e.target.value
                                                        })
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item label='Password' className="fw-500">
                                                <Input.Password className='w-100 radius-6' size='large' 
                                                    value={register?.password || ''}
                                                    onChange={(e)=>{
                                                        setRegister({
                                                            ...register,
                                                            password:e.target.value
                                                        })
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item label='Address' className="fw-500">
                                                <Input className='w-100 radius-6' size='large' 
                                                    value={register?.address || ''}
                                                    onChange={(e)=>{
                                                        setRegister({
                                                            ...register,
                                                            address:e.target.value
                                                        })
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item label='Zipcode' className="fw-500">
                                                <Input className='w-100 radius-6' size='large' 
                                                    value={register?.zipcode || ''}
                                                    onChange={(e)=>{
                                                        setRegister({
                                                            ...register,
                                                            zipcode:e.target.value
                                                        })
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12}>
                                            <Form.Item label='City' className="fw-500">
                                                <Input className='w-100 radius-6' size='large' 
                                                    value={register?.city || ''}
                                                    onChange={(e)=>{
                                                        setRegister({
                                                            ...register,
                                                            city:e.target.value
                                                        })
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item label='Country' className="fw-500">
                                                <Input className='w-100 radius-6' size='large' 
                                                    value={register?.country || ''}
                                                    onChange={(e)=>{
                                                        setRegister({
                                                            ...register,
                                                            country:e.target.value
                                                        })
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Space className='justify-center'>
                                                <Button type="primary" onClick={RegisterUser} className="text-center fs-14 px-4 commn-btn radius-6">
                                                    CREATE ACCOUNT
                                                </Button>
                                            </Space>
                                        </Col>
                                    </Row>
                                </Form>
                            </Space>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Signuppage