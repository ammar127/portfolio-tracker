import React from 'react';
import { Descriptions } from 'antd';


export default function Profile({items}) {
  return (
    <Descriptions   items={items} column={1} />
  )
}
