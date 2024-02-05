import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { Col, Row } from 'antd';
import {
  Price,
  Companies,
  Profile,
  News
} from 'components';
import NewsData from 'data/news.json'
import CompaniesData from 'data/companies.json'
import { isAfter, isBefore, parse } from 'date-fns';
import { useDateRange } from 'context/DateRangeContext';

function Dashboard() {
  const { startDate, endDate, } = useDateRange();
  const [company, setCompany] = useState(null);

  const onCompanyClick = (_company) => {
    setCompany(_company);
  }

  const profileItems = [
    {
      "key": 0,
      "label": "Name",
      "children": company?.companyName || 'XX'
    },
    {
      "key": 1,
      "label": "Industry",
      "children": company?.industry || 'XX'
    },
    {
      "key": 2,
      "label": "Sector",
      "children": company?.sector || 'XX'
    },
    {
      "key": 3,
      "label": "Employees",
      "children": company?.employees || 'XX'
    },
    {
      "key": 4,
      "label": "Equity",
      "children": company?.equity || 'XX'
    }
  ];


  const isDateInRange = (dateString) => {
    const parsedDate = parse(dateString, 'MM/dd/yyyy', new Date());
    return isAfter(parsedDate, startDate) && isBefore(parsedDate, endDate);
  };

  const priceData = CompaniesData.map(c => ({
    "id": c.companyName,
    "color": c.color,
    "data": c.data.
      filter(d => isDateInRange(d.Date))
      .map(d => ({
        "x": d.Date,
        "y": d.Price,
      }))
  }))

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
            <Price data={priceData} />
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
            <Profile items={profileItems} />
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