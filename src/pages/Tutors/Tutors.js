import React from 'react';
import { Card, Layout, Row, Col, Empty } from 'antd';
import { tutors } from './data';

const { Meta } = Card;
const { Content } = Layout;

const Tutors = () => {
  const renderEmptyResults = () => {
    return (
      <div className="center">
        <Empty description="В данном разделе пока нет никакой информации о преподавателях" />
      </div>
    );
  };

  const renderTutors = () => {
    return (
      <Row>
        {tutors.map((personal) => {
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
        <h1 className="article-title">Преподаватели</h1>
        {tutors.length !== 0 ? renderTutors() : renderEmptyResults()}
      </Content>
    </Layout>
  );
};

export default Tutors;
