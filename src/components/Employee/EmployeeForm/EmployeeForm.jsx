
import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Row, Col, Radio } from 'antd';

import './EmployeeForm.css'

const EmployeeForm = ({setEmployees}) => {
    const [form] = Form.useForm();
    const [formData, setFormData] = useState({});

    const onFinish = values => {
        values['key'] = values.phone;
        setFormData(prevState => ({...prevState, ...values}));
        setEmployees(prevEmployees => ([...prevEmployees, values]));
        form.resetFields();
    };

    return (
        <Form 
            name="employeeForm"
            colon={false} 
            onFinish={onFinish}
            form={form}
            className="EmployeeForm"
            layout="horizontal"
        >
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Form.Item name="firstName" label="First Name" rules={[{required: true, message: "Please enter your First Name"}]}>
                        <Input value={formData.firstName}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="lastName" label="Last Name" rules={[{required: true, message:'Please enter you Last Name'}]}>
                        <Input value={formData.lastName}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Form.Item name="gender" label="Gender" rules={[{required: true, message: 'Please select your Gender'}]}>
                        <Radio.Group value={formData.gender}>
                            <Radio value="Male">Male</Radio>
                            <Radio value="Female">Female</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="age" label="Age" rules={[{required: true, type: 'number', message:'Please set your Age'}]}>
                        <InputNumber value={formData.age}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Form.Item name="phone" label="Phone" rules={[{required: true, message:'Please provide your Phone Number'}]}>
                        <Input value={formData.phone}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Form.Item wrapperCol={{offset: 10}}>
                    <Button type="primary" htmlType="submit">Add New Employee</Button>
                </Form.Item>
            </Row>
        </Form>
    );
}

export default EmployeeForm;
