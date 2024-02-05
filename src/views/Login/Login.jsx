import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Checkbox, message } from 'antd';
import { login } from 'services/AuthService';
import './Login.css';
import loginImg from 'assets/login.png'

const Login = () => {

    const navigate = useNavigate();

    const onFinish = async values => {
        const { username, password } = values;
        try {
            await login(username, password);
            navigate('/dashboard');
        } catch (error) {
            message.error(error);
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img src={loginImg} alt="Login" />
                </div>
                <Form
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <p className="form-title">Welcome back</p>
                    <p>Login to the Portfolio Tracker</p>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            placeholder="Username"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            LOGIN
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
