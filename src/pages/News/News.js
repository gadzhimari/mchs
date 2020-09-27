import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Pagination, Layout, Image } from 'antd';
import { news } from './data';
import './style.css';

const { Content } = Layout;

const News = () => {
  const { path } = useRouteMatch();

  const renderPagination = () => {
    return (
      <div className="pagination-wrapper">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    );
  };

  const renderNews = () => {
    return (
      <>
        <div className="article-list">
          {news.map((item) => {
            return (
              <Link key={item.id} to={`${path}/${item.id}`} className="article-item">
                <h2 className="article-item-title">{item.title}</h2>
                <p className="article-description">{item.description}</p>
                <Image src={item.imageUrl} />
              </Link>
            );
          })}
        </div>

        {renderPagination()}
      </>
    );
  };

  return (
    <Layout className="article-wrapper">
      <Content className="article">
        <h1 className="article-title">Новости</h1>
        {renderNews()}
      </Content>
    </Layout>
  );
};

export default News;
