import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Card, Layout, Row, Col, Empty } from 'antd';
import { categories } from './data';
import './style.css';

const { Meta } = Card;
const { Content } = Layout;

const Equipment = () => {
  const { path } = useRouteMatch();

  const renderEmptyResults = () => {
    return (
      <div className="center">
        <Empty description="В данном разделе пока нет никакой информации об оснащении" />
      </div>
    );
  };

  const renderCategories = () => {
    return (
      <Row type="flex">
        {categories.map((category) => {
          return (
            <Col key={category.id} span={8} className="category">
              <Link to={`${path}/${category.id}`}>
                <Card
                  style={{ width: 240 }}
                  cover={<img alt={category.title} src={category.imageUrl} />}
                  bodyStyle={{ padding: 12, minHeight: 60 }}
                  hoverable
                >
                  <Meta description={category.title} className="category-title" />
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <Layout className="article-wrapper">
      <Content className="article">
        <h1 className="article-title">Материально-техническое обеспечение и оснащенность</h1>
        {categories.length !== 0 ? renderCategories() : renderEmptyResults()}
      </Content>
    </Layout>
  );
};

export default Equipment;
