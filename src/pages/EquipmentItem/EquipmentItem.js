import React from 'react';
import { Layout } from 'antd';
import { useRouteMatch } from 'react-router-dom';
import { articles } from './data';

const { Content } = Layout;

const EquipmentItem = () => {
  const {
    params: { id },
  } = useRouteMatch();

  const article = articles[id];

  return (
    <Layout className="article-wrapper">
      <Content className="article">
        <h1 className="article-title">{article.title}</h1>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />
      </Content>
    </Layout>
  );
};

export default EquipmentItem;
