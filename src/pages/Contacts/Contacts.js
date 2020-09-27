import React from 'react';
import { Row, Col, Form, Input, Button, Layout } from 'antd';
import { contact, validateMessages } from './data';
import './style.css';

const { Content } = Layout;
const { TextArea } = Input;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

const Contacts = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {};

  const renderPhones = () => {
    return contact.phones.map((phone) => (
      <div className="addressItem" key={phone.name}>
        <span className="addressName">{`${phone.name}:`}</span>{' '}
        <a href={`tel:${phone.value}`}>{phone.value}</a>
      </div>
    ));
  };

  const renderContacts = () => {
    return (
      <>
        <div className="addressItem">
          <span className="addressName">{`Адрес: `}</span>
          {contact.address}
        </div>
        <div>{renderPhones()}</div>
        <div className="addressItem">
          <span className="addressName">{`Факс: `}</span>
          {contact.fax}
        </div>
        <div className="addressItem">
          <span className="addressName">{`Email: `}</span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <div className="addressItem">
          <span className="addressName">{`Время работы: `}</span>
          {contact.workingMode}
        </div>
        <div className="addressItem">
          <span className="addressName">{`Выходные: `}</span>
          {contact.weekend}
        </div>
      </>
    );
  };

  return (
    <Layout className="article-wrapper">
      <Content className="article">
        <Row>
          <Col span={12}>
            <h2 className="feedback">Обратная связь</h2>
            <Form
              {...layout}
              validateMessages={validateMessages}
              form={form}
              name="control-hooks"
              layout="vertical"
              onFinish={handleSubmit}
            >
              <Form.Item
                name="name"
                label="Имя"
                rules={[{ required: true }]}
                style={{ width: '100%' }}
              >
                <Input placeholder="Ваше имя" />
              </Form.Item>
              <Form.Item name="phone" label="Телефон" rules={[{ required: true }]}>
                <Input type="tel" placeholder="Ваш телефон" />
              </Form.Item>
              <Form.Item name="question" label="Вопрос" rules={[{ required: true }]}>
                <TextArea placeholder="Ваш вопрос" rows={6} />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Отправить
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>
            <h1 className="article-title">Контакты</h1>

            {renderContacts()}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Contacts;
