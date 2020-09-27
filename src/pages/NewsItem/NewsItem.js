import React from 'react';
import { Layout } from 'antd';
import { article } from './data';

const { Content } = Layout;

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const NewsItem = () => {
  const date = new Date(article.postedAt);
  const formattedDate = date.toLocaleDateString('ru-RU', options);

  return (
    <Layout className="article-wrapper">
      <Content className="article">
        <h1 className="article-title">{article.title}</h1>
        <div className="article-date">{formattedDate}</div>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />
      </Content>
    </Layout>
  );
};

export default NewsItem;
