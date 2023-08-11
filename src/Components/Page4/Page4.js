import React from 'react'
import '../Page4/page4.scss'
import { Button } from 'antd'
import NewToolicon from '../../assets/images/new-tool.svg'
import arrow from '../../assets/images/explore-btn-dark.svg'
import demo from '../../assets/images/watch-demo.svg'
import imac from '../../assets/images/light.svg'


const Page4 = () => {
  return (
    <div className='containers'>
      <div className='background-images'>
        <div className="new-tool">
          <img className='tool-icon' src={NewToolicon} alt="" />
          Unleash AI-Driven Creativity. <br />
          Generate Controlled Background for your image.
        </div>
        <div className="btns">
          <Button className='explore btn' size='large'>Explore Now <img className='arrow' src={arrow} alt="" /> </Button>
          <Button className='demo btn' size='large'>Watch Demo <img className='arrow' src={demo} alt="" /> </Button>
        </div>
      </div>
      <div className="imac">
        <img className='imac-img' src={imac} alt="" />
      </div>
    </div>
  )
}

export default Page4
