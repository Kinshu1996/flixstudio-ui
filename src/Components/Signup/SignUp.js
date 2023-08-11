import React from 'react'
import '../Signup/signup.scss'
import { Button, Form, Input } from 'antd';

const SignUp = () => {
    return (
        <div className='sign-up-page'>
            <div className="cont">
                <div className="left-sec">
                    <div className="info">
                        <h2><span>Sign up now & get a call</span>  from our experts!</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    </div>
                </div>
                {/* <div className="cardss"> */}
                    <div className="right-sec">
                        <Form
                            name="basic"
                            layout="vertical"
                            className='form'
                        >
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Name!',
                                    },
                                ]}
                            >
                                <Input placeholder='John Doe'/>
                            </Form.Item>

                            <Form.Item
                                label="Business email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input placeholder='john@example.com'/>
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Contact Number"
                            >
                                <Input
                                    addonBefore="+91"
                                    placeholder='989XXXXXX2'
                                />
                            </Form.Item>

                            <Form.Item
                                label="Organization"
                                name="organization"
                            >
                                <Input placeholder='Organization'/>
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    className='btn'
                                    type="primary"
                                    htmlType="submit">
                                    Book a Meeting
                                </Button>
                            </Form.Item>

                            <Form.Item>
                                <Button className='btn req-btn' >
                                    Request a Call Back
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default SignUp
