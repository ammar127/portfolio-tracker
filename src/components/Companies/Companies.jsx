import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Button, Divider, List, Skeleton } from 'antd';
function Companies({ data, onItemClick }) {


  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        // border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}


        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain></Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                title={<a onClick={(e) => { e.preventDefault(); onItemClick(item); }}>{item.companyName}</a>}
                // title={<Button type="link" onClick={() => onItemClick(item)}>
                //   {item.companyName}
                // </Button>}
                description={item.code}
              />
              <div>{item.price}</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default Companies;