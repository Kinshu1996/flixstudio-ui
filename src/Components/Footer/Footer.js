import React from 'react'
import '../Footer/footer.scss'
import { Divider, Input, Anchor } from 'antd'
import CompLogo from '../../assets/images/AI Product Suite.svg'
import sendIcon from '../../assets/images/send-icon.svg'

const { Link } = Anchor;

const Footer = () => {
    return (
        <div className='footer-page'>
            <div className="footer-cont">
                <div className="cont one">
                    <div className="one-left">
                        <img className='logo' src={CompLogo} alt="" />
                        <p>"FlixStock offers a cutting-edge technology solution to help online sellers create high-quality product images for selling and marketing purposes"</p>
                    </div>
                    <div className="one-right">
                        <div className="upper">
                            <div className="left">
                                <div className='bold'>info@flixstock.com</div>
                                <div className='abt'>Company</div>
                                <div className='abt'>About Us</div>
                                <div className='abt'>Partner with us</div>
                                <div className='abt'>Contact us</div>
                            </div>
                            <div className="right">
                                <div className='bold'>(917) 830-6172</div>
                                <div className='abt'>Resources</div>
                                <div className='abt'>Blog</div>
                                <div className='abt'>News & Events</div>
                                <div className='abt'>Customer Story</div>
                            </div>
                        </div>
                        <div className="lower">
                            Subscribe to our emails
                            <Input className='input'
                                placeholder='Your email' />

                        </div>
                    </div>
                </div>
                <div className='div-cont'>
                    <Divider
                        orientation='left'
                        orientationMargin="0"
                    >
                        <div className="divider">
                        <div>USA</div>
                        <div>EUROPE</div>
                        <div>GERMANY</div>
                        <div>OTHERS</div>
                        </div>
                    </Divider>
                </div>
                <div className="cont two">
                    <p className="two-left">
                        E-commerce Product Photography, San Francisco Flat Lay Product Photography, San Francisco Ghost Mannequin Product Photography, San Francisco Clothing Product Photography, San Francisco
                    </p>
                    <p className="two-middle">
                        E-commerce Product Photography, San Francisco Flat Lay Product Photography, San Francisco Ghost Mannequin Product Photography, San Francisco Clothing Product Photography, San Francisco
                    </p>
                    <p className="two-right">
                        E-commerce Product Photography, San Francisco Flat Lay Product Photography, San Francisco Ghost Mannequin Product Photography, San Francisco Clothing Product Photography, San Francisco
                    </p>
                </div>
                <div className="cont three">
                    <div className="three-left">
                        <div>Career</div>
                        <div>FAQ</div>
                        <div>Terms & Condition</div>
                        <div>Privacy Policy</div>
                    </div>
                    <div className="three-right">
                    © FlixStock 2023 | All rights reserved
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
