import React from 'react'
import "../Intro/Intro.scss"
import star from "../../assets/images/star.png"
import crown from "../../assets/images/crown.svg"
import arrow from "../../assets/images/arrow.png"
import {Button} from 'antd'

const Intro = () => {
    return (
        <div className='intro'>
            <img  className='crown-img' src={crown} alt="" />
            Flixstock's <span className='color'>Complete AI Suite</span> <img src={star} alt="" /> <br />
            Introducing the Ultimate AI-Powered Tools for <br /> E-commerce and Marketing Images.
            <div className='sub-intro'>
            Transform your catalog and marketing images with our powerful AI products, all in one place
            </div>
            <img className='arrow' src={arrow} alt="" />
            <div className='btn'>
                <Button className='get-started-btn'>
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default Intro
