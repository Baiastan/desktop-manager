class Employee {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.manager = null;
  }

  save() {
    console.log(`${this.name} (${this.role}) saved with manager ${this.manager}`);
  }
}

const orgChart = {
  employees: [],
  addNewEmployee() {
    const employeeDetail = this.getEmployeeDetail();
    employeeDetail.on("complete", (employee) => {
      const managerSelector = this.selectManager(employee);
      managerSelector.on("save", (employee) => {
        employee.save();
        this.employees.push(employee);
        console.log("Employee saved: ", employee);
      });
    });
  },

  getEmployeeDetail() {
    const detailContainer = document.createElement("div");
    const nameInput = document.createElement("input");
    nameInput.placeholder = "Employee Name";
    detailContainer.appendChild(nameInput);
    const roleInput = document.createElement("input");
    roleInput.placeholder = "Employee Role";
    detailContainer.appendChild(roleInput);
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    detailContainer.appendChild(submitBtn);

    const eventHandlers = {};

    submitBtn.addEventListener("click", () => {
      const employee = new Employee(nameInput.value, roleInput.value);
      if (eventHandlers["complete"]) {
        eventHandlers["complete"](employee);
      }
    });

    document.getElementById("app").appendChild(detailContainer);

    return {
      on(event, callback) {
        eventHandlers[event] = callback;
      },
    };
  },

  selectManager(employee) {
    const managerContainer = document.createElement("div");
    const managerInput = document.createElement("input");
    managerInput.placeholder = "Manager Name";
    managerContainer.appendChild(managerInput);
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    managerContainer.appendChild(saveBtn);

    const eventHandlers = {};

    saveBtn.addEventListener("click", () => {
      employee.manager = managerInput.value;
      if (eventHandlers["save"]) {
        eventHandlers["save"](employee);
      }
    });

    document.getElementById("app").appendChild(managerContainer);

    return {
      on(event, callback) {
        eventHandlers[event] = callback;
      },
    };
  },
};
