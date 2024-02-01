import React from 'react'
import { Card } from 'antd';
import { Col, Row } from 'antd';
import Price from 'components/Price/Price';
import Companies from 'components/Companies/Companies';
import Profile from 'components/Profile/Profile';
import News from 'components/News/News';
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
            <Profile />
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