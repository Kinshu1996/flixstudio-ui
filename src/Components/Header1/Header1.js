import React from 'react'
import {Space, Button } from 'antd';
import '../Header1/header1.scss'

const header1 = () => {
  return (
    <div className='header1'>
      <Space >
        <Button 
            className='site-btn'
            type='secondary'
            shape='round'
            size='small'>FlixStock</Button>
        <Button
            className='site-btn'
            type='secondary'
            shape='round'
            size='small'>FlixStudio</Button>
        <Button
            className='site-btn'
            type='secondary'
            shape='round'
            size='small'>ImageEdit.ai</Button>

      </Space>
    </div>
  )
}

export default header1
