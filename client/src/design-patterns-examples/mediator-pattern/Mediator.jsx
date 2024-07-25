import React, { useState } from 'react';
import EmployeeDetail from './EmployeeDetail';
import ManagerSelector from './ManagerSelector';
import Button from '../../components/Button';

//here a name of the react component can be anything. For example I would name it AddEmployeeWorkFlow or AddEmployeeMediator
const Mediator = () => {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [showManagerSelector, setShowManagerSelector] = useState(false);

  const handleAddEmployee = () => {
    setShowManagerSelector(false);
    setCurrentEmployee(null);
  };

  const handleCompleteEmployee = (employee) => {
    setCurrentEmployee(employee);
    setShowManagerSelector(true);
  };

  const handleManagerSave = (employee) => {
    setEmployees((prev) => [...prev, employee]);
    setCurrentEmployee(null);
    setShowManagerSelector(false);
  };

  return (
    <div>
      <h1 className="text-white text-2xl">
        Mediator Pattern Interactive Example
      </h1>
      <Button onClick={handleAddEmployee}>Add New Employee</Button>

      <div>
        {!showManagerSelector && (
          <EmployeeDetail onComplete={handleCompleteEmployee} />
        )}
        {showManagerSelector && currentEmployee && (
          <ManagerSelector
            employee={currentEmployee}
            onSave={handleManagerSave}
          />
        )}
        <ul>
          {employees.map((employee, index) => (
            <li key={`${index}-${employee.name}`}>
              {employee.name} ({employee.role}) - Manager: {employee.manager}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mediator;
