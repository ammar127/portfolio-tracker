import React from 'react';
import { Breadcrumb, Layout, Menu, Typography, theme, DatePicker } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { RangePicker } = DatePicker;
import './index.css'
import { Outlet } from 'react-router-dom';

const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

const HomeLayout = () => {
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
                    <Title >Portfolio Tracker</Title>
                </div>
                <RangePicker />

            </Header>
            <Content
                style={{
                    padding: '20px',
                    minHeight: 280,
                    height: 'calc(100vh - 130px)',
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