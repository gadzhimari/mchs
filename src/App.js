import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Routes from './routes';
import { SideMenu, TopBar } from './components';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout className="page">
        <TopBar />
        <Layout className="container">
          <SideMenu />
          <Routes />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
