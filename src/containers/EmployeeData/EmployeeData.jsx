import React, { useEffect, useState } from 'react';

import EmployeeForm from '../../components/Employee/EmployeeForm/EmployeeForm';
import EmployeeTable from '../../components/Employee/EmployeeTable/EmployeeTable';

const EmployeeData = () => {
    const employeesData = localStorage.getItem('employees');
    const [employees, setEmployees] = useState(employeesData === null ? [] : JSON.parse(employeesData));

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    return (
        <div className="EmployeeData">
            <EmployeeForm setEmployees={setEmployees}/>
            {
                employees.length === 0 
                    ? <h3 style={{textAlign: "center"}}>No employees were found!</h3>
                    : <EmployeeTable dataSource={employees} setEmployees={setEmployees} />
            }
        </div>
    );
}

export default EmployeeData;
