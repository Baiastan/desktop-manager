import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

const ManagerSelector = ({ employee, onSave }) => {
  const [manager, setManager] = useState('');
  const handleSave = () => {
    employee.manager = manager;
    employee.save();
    onSave(employee);
  };
  return (
    <div>
      <Input
        className="mt-5"
        type="text"
        placeholder="Manager Name"
        value={manager}
        onChange={setManager}
      />
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};

export default ManagerSelector;
