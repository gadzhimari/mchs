import React from 'react';
import { Layout } from 'antd';
import logo from './logo.svg';
import './style.css';

const { Header } = Layout;

const TopBar = () => {
  return (
    <Header className="header">
      <div className="container header-inner">
        <div className="header-logo">
          <img src={logo} alt="логотип мчс" />
        </div>
        <div className="header-title">
          Учебный центр федеральной противопожарной службы по Республике Дагестан
        </div>
      </div>
    </Header>
  );
};

export default TopBar;
