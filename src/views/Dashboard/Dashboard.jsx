import React from 'react'
import { Card } from 'antd';
import { Col, Row } from 'antd';
import {
  Price,
  Companies,
  Profile,
  News
} from 'components';
import ProfileItems from 'data/profileItems.json'
function Dashboard() {

  return (
    <>
      <Row>
        <Col flex="1 1 500px" style={{
          padding: '20px',
        }}>
          <Card
            title="Price"
            bordered={false}
          >
            <Price />
          </Card>
        </Col>
        <Col flex="0 1 500px" style={{
          padding: '20px',
        }}>
          <Card
            title="Companies"
            bordered={false}

          >
            <Companies />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col flex="1 1 500px" style={{
          padding: '20px',
        }}>
          <Card
            title="Profile"
            bordered={false}

          >
            <Profile items={ProfileItems} />
          </Card>
        </Col>
        <Col flex="1 1 500px" style={{
          padding: '20px',
        }}>
          <Card
            title="News"
            bordered={false}
            style={{

            }}
          >
            <News />
          </Card>
        </Col>
      </Row>
    </>

  )
}

export default Dashboard