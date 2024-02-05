import React from 'react';
import { Breadcrumb, Layout, Menu, Typography, theme, DatePicker } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { RangePicker } = DatePicker;
import './index.css'
import { Outlet } from 'react-router-dom';
import {  useDateRange } from '../../context/DateRangeContext';


const HomeLayout = () => {
    const { _startDate, _endDate, updateStartDate, updateEndDate, resetDateRange } = useDateRange();

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>


            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <div className="logo" >
                    <Title level={3}>Portfolio Tracker</Title>
                </div>
                <Menu mode="horizontal" theme="dark" items={[{
                    label: <RangePicker theme="dark"  value={[_startDate, _endDate]} onCalendarChange={e => {
                        if (e[0] && e[1]) {
                            updateStartDate(e[0])
                            updateEndDate(e[1])
                        }
                    }} />
                }]} />;


            </Header>
            <Content
                style={{
                    padding: '20px',
                    minHeight: 280,
                    // height: 'calc(100vh - 130px)',
                }}
            >
                <Outlet />
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Portfolio Tracker ©{new Date().getFullYear()} Created by Ammar
            </Footer>

        </Layout>
    );
};
export default HomeLayout;