import React, { useState } from 'react';
import { Menu } from "antd"
import items from './items';

const Nav = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e: any) => {
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Nav;