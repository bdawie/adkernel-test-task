import React from 'react';
import { Table, Button } from 'antd';
 
const EmployeeTable = ({dataSource, setEmployees}) => {
    const handleRemove = (record) => {
        setEmployees(dataSource.filter(employee => employee.key !== record.key));
    }

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            sorter: (a, b) => a.firstName.length - b.firstName.length
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
            sorter: (a, b) => a.lastName.length - b.lastNamelastName.length
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            filters: [
                {
                    text: 'Male',
                    value: 'Male'
                },
                {
                    text: 'Female',
                    value: 'Female'
                }
            ],
            onFilter: (value, record) => record.gender.indexOf(value) === 0
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Action',
            key:'action',
            render: (_, record) => <Button type="link" onClick={() => handleRemove(record)}>Remove</Button>
        }
    ]
    return (
        <Table dataSource={dataSource} columns={columns}/>
    );
}

export default EmployeeTable;
