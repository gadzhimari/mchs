import React from 'react';
import { Card, Layout, Row, Col, Empty } from 'antd';
import { personals } from './data';

const { Meta } = Card;
const { Content } = Layout;

const Personal = () => {
  const renderEmptyResults = () => {
    return (
      <div className="center">
        <Empty description="В данном разделе пока нет никакой информации о руководстве" />
      </div>
    );
  };

  const renderPersonal = () => {
    return (
      <Row>
        {personals.map((personal) => {
          return (
            <Col key={personal.id} span={8}>
              <Card
                style={{ width: 240 }}
                cover={<img alt={personal.fio} src={personal.imageUrl} />}
                bodyStyle={{ padding: 12 }}
              >
                <Meta
                  className="personal-title"
                  title={personal.fio}
                  description={personal.title}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <Layout className="article-wrapper">
      <Content className="article">
        <h1 className="article-title">Руководство</h1>
        {personals.length !== 0 ? renderPersonal() : renderEmptyResults()}
      </Content>
    </Layout>
  );
};

export default Personal;
