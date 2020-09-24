import React from 'react';
import { Layout } from 'antd';
import { article } from './data';
import './style.css';

const { Content } = Layout;

const Main = () => {
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <h1 className="article-title">О центре</h1>
        <div className="article-body">{article}</div>
      </Content>
    </Layout>
  );
};

export default Main;
