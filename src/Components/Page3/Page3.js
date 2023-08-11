import React from 'react'
import { Button } from 'antd'
import '../Page3/page3.scss'
import modelImg from '../../assets/images/Model img.svg'
import arrow from '../../assets/images/explore-btn-icon.png'
import tag from '../../assets/images/HERE 2.svg'
import dots from '../../assets/images/dots.svg'
import downArrleft from '../../assets/images/down-arr-left.svg'

const Page3 = () => {
  return (
    <div className='Page'>
    <div className='container'>
        <div className="Left-section">
            <img className='model-img' src={modelImg} alt="" />
        </div>
        <div className="Right-section">
            <div className="tag">
                <img src={tag} alt="" />
            </div>
            <div className='heading'>
            Resize your product images for <span>multiple marketplaces</span> & social media platform in bulk
            </div>
            <div className="sub-heading">
            Tailored for garment images, our image resizer is specifically designed to cater to the needs of brands, retailers, studios, and long-tail clients.
            </div>
            <div className="btn">
            <Button className='explore-btn' size='large'>Explore Now <img className='arrow' src={arrow} alt="" /> </Button>
            </div>
        </div>
      </div>
      <img className='dots' src={dots} alt="" />
    <img className='down-arr-left' src={downArrleft} alt="" />
    </div>
    
  )
}

export default Page3
