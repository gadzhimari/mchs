import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideMenu = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" defaultOpenKeys={['about']} style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key="home">
          <Link to="/">Главная</Link>
        </Menu.Item>
        <SubMenu key="about" title="О центре">
          <Menu.Item key="documents">
            <Link to="/documents">Документы</Link>
          </Menu.Item>
          <Menu.Item key="personal">
            <Link to="/personal">Руководство</Link>
          </Menu.Item>
          <Menu.Item key="tutors">
            <Link to="/tutors">Преподаватели</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="program">
          <Link to="/program">Обучение</Link>
        </Menu.Item>
        <Menu.Item key="news">
          <Link to="/news">Новости</Link>
        </Menu.Item>
        <Menu.Item key="contacts">
          <Link to="/contacts">Контакты</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;