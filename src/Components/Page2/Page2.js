import React from 'react'
import "../Page2/page2.scss"
import { Button, Card } from 'antd'
import arrow from '../../assets/images/explore-btn-icon.png'
import tag from '../../assets/images/HERE.svg'
import albumIcon from '../../assets/images/album-icon.svg'
import downArr from '../../assets/images/down-arrow.svg'
import stars from '../../assets/images/stars.svg'

const Page2 = () => {
    return (
        <div className='page'>
        <div className='container'>
            <div className="left-section">
                <div className="tag">
                    <img src={tag} alt="" />
                </div>
                <h1 className="heading">
                    Elevate your catalog images with <span> Meta Models</span> 
                </h1>
                <div className="sub-heading">
                    Meta Models are AI-generated, hyperrealistic fashion models representing diverse ethnicities, demographics, and body types, offering cost-effective alternatives for creating catalog images.
                </div>
                <div className='btn'>
                    <Button className='explore-btn' size='large'>Explore Now <img className='arrow' src={arrow} alt="" /> </Button>
                </div>
            </div>

            <div className="right-section">
                <Card className='card' hoverable= 'true'>
                    <img src={albumIcon} alt="" />
                    <p>Drag & drop an image</p>
                    <p className='small-font'>File size not more than 15MB</p>
                    <Button className='browse-btn'>Browse from your device</Button>
                </Card>
            </div>
        </div>
        <img className='down-arr' src={downArr} alt="" />
        <img className='stars' src={stars} alt="" />
        </div>
    )
}

export default Page2
