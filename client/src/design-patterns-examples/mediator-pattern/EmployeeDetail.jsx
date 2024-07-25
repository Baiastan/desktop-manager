import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const EmployeeDetail = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = () => {
    const employee = new Employee(name, role);
    onComplete(employee);
  };

  return (
    <div>
      <Input
        type="text"
        className="mt-5 "
        placeholder="Employee Name"
        value={name}
        onChange={setName}
      />
      <Input
        className="mt-2  text-black"
        type="text"
        placeholder="Employee Role"
        value={role}
        onChange={setRole}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

class Employee {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.manager = null;
  }

  save() {
    console.log(
      `${this.name} (${this.role}) saved with manager ${this.manager}`
    );
  }
}

export default EmployeeDetail;
