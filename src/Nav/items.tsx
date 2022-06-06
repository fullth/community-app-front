import React from 'react';
import { HomeOutlined, MenuUnfoldOutlined, LinkOutlined } from '@ant-design/icons'

const items = [
  {
    label: 'Main',
    key: 'mail',
    icon: <HomeOutlined />,
  },
  {
    label: 'Problem Solve',
    key: 'SubMenu',
    icon: <MenuUnfoldOutlined />,
    children: [
      {
        type: 'group',
        label: 'Express.js',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'React',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
      </a>
    ),
    key: 'alipay',
    icon: <LinkOutlined />
  },
];

export default items;