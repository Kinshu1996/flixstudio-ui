import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {Button} from 'antd'
import '../Header/header.scss';
import CompLogo from "../../assets/images/AI Product Suite.svg"
import expert from "../../assets/images/expert.png"

const Header = () => {
  const productsMenu = (
    <Menu>
      <Menu.Item key="1">Product 1</Menu.Item>
      <Menu.Item key="2">Product 2</Menu.Item>
      <Menu.Item key="3">Product 3</Menu.Item>
    </Menu>
  );

  const galleryMenu = (
    <Menu>
      <Menu.Item key="1">Gallery 1</Menu.Item>
      <Menu.Item key="2">Gallery 2</Menu.Item>
      <Menu.Item key="3">Gallery 3</Menu.Item>
    </Menu>
  );

  const resourcesMenu = (
    <Menu>
      <Menu.Item key="1">Resource 1</Menu.Item>
      <Menu.Item key="2">Resource 2</Menu.Item>
      <Menu.Item key="3">Resource 3</Menu.Item>
    </Menu>
  );

  const companyMenu = (
    <Menu>
      <Menu.Item key="1">Company 1</Menu.Item>
      <Menu.Item key="2">Company 2</Menu.Item>
    </Menu>
  );

  return (
    <div className="navbar">
      <div className="navbar-items">
        <div className="navbar-item">
            <img src={CompLogo} alt="" />
        </div>
        <div className="navbar-item">
          <Dropdown overlay={productsMenu} placement="bottomCenter">
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              Products <DownOutlined  className='icon'/>
            </a>
          </Dropdown>
        </div>
        <div className="navbar-item">Studios</div>
        <div className="navbar-item">
          <Dropdown overlay={galleryMenu} placement="bottomCenter">
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              Gallery <DownOutlined  className='icon'/>
            </a>
          </Dropdown>
        </div>
        <div className="navbar-item">
          <Dropdown overlay={resourcesMenu} placement="bottomCenter">
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              Resources <DownOutlined  className='icon'/>
            </a>
          </Dropdown>
        </div>
        <div className="navbar-item">Pricing</div>
        <div className="navbar-item">
          <Dropdown overlay={companyMenu} placement="bottomCenter">
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              Company <DownOutlined  className='icon'/>
            </a>
          </Dropdown>
        </div>
        <div className="navbar-item">
            <Button className='expert-btn'>
                <img src={expert} alt="" /> Talk to an Expert
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
