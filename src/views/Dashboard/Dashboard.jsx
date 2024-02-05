import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { Col, Row } from 'antd';
import {
  Price,
  Companies,
  Profile,
  News
} from 'components';
// import ProfileItems from 'data/profileItems.json'
import NewsData from 'data/news.json'
import CompaniesData from '../../data/companies.json'
import useDateRange from '../../hooks/date.hook';

function Dashboard() {
  const { startDate, endDate, } = useDateRange();
  const [company, setCompany] = useState(null);

  const onCompanyClick = (_company) => {
    setCompany(_company.code);
  }
  const getProfileItems = () => {
    const _company = CompaniesData.find(c => c.code === company);
    return [
      {
        "key": 0,
        "label": "Name",
        "children": _company?.companyName || 'XX'
      },
      {
        "key": 1,
        "label": "Industry",
        "children": _company?.industry || 'XX'
      },
      {
        "key": 2,
        "label": "Sector",
        "children": _company?.sector || 'XX'
      },
      {
        "key": 3,
        "label": "Employees",
        "children": _company?.employees || 'XX'
      },
      {
        "key": 4,
        "label": "Equity",
        "children": _company?.equity || 'XX'
      }
    ];
  }
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
            <Companies data={CompaniesData} onItemClick={onCompanyClick} />
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
            <Profile items={getProfileItems()} />
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
            <News data={NewsData} />
          </Card>
        </Col>
      </Row>
    </>

  )
}

export default Dashboard