import React from 'react';
import { Layout } from 'antd';
import { program } from './data';
import './style.css';

const { Content } = Layout;

const Program = () => {
  return (
    <Layout className="article-wrapper">
      <Content className="article">
        <h1 className="article-title">{program.title}</h1>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: program.content }} />
      </Content>
    </Layout>
  );
};

export default Program;
