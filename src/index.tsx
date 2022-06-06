import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav/index';
import "antd/dist/antd.css"
import { Layout, Space, Card } from 'antd';
const { Content, Footer } = Layout;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <Layout className="layout">
        <Nav />
        <Content style={{ padding: '30px 50px' }}>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Card title="Card" size="small">
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="Card" size="small">
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="Card" size="small">
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Space>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2022 Created by fullth</Footer>
      </Layout>
  </>
);
