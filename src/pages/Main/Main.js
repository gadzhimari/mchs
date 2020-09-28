import React from 'react';
import { Layout } from 'antd';
import { article } from './data';
import './style.css';

const { Content } = Layout;

const Main = () => {
  return (
    <Layout className="article-wrapper">
      <Content className="article">
        <h1 className="article-title">История</h1>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: article }} />
      </Content>
    </Layout>
  );
};

export default Main;
