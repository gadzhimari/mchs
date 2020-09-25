import React from 'react';
import { Card, Layout, Row, Col, Empty } from 'antd';
import { documents } from './data';
import { File } from 'resources/images';
import './style.css';

const { Meta } = Card;
const { Content } = Layout;

const Documents = () => {
  const renderEmptyResults = () => {
    return (
      <div className="center">
        <Empty description="В данном разделе пока нет ни одного документа" />
      </div>
    );
  };

  const renderDocuments = () => {
    return (
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {documents.map((doc) => {
          return (
            <Col key={doc.id} sm={6} lg={4}>
              <Card
                className="document"
                style={{ width: 120 }}
                cover={
                  <a href={doc.documentUrl} download>
                    <img alt={doc.title} src={File} />
                  </a>
                }
                bodyStyle={{ padding: 12 }}
              >
                <Meta description={doc.title} className="document-description" />
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
        <h1 className="article-title">Файлы</h1>
        {documents.length !== 0 ? renderDocuments() : renderEmptyResults()}
      </Content>
    </Layout>
  );
};

export default Documents;
