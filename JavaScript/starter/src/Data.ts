type Employee2 = {
  name: string;
  age: number;
  salary: number;
};

const employees: Employee2[] = [
  {
    name: "Jhon",
    age: 24,
    salary: 50000,
  },
  {
    name: "Jane",
    age: 25,
    salary: 60000,
  },
  {
    name: "Jack",
    age: 26,
    salary: 70000,
  },
];

function findEmployeeByName(name: string): Employee2 | undefined {
  return employees.find((employee) => employee.name === name);
}

function getEmployeesWithSalaryGreaterThan(salary: number): Employee2[] {
  return employees.filter((employee) => employee.salary > salary);
}

function getEmployeesWithSalaryGreaterThanAndAgeGreatherThan(
  salary: number,
  age: number
): Employee2[] {
  return employees.filter(
    (employee) => employee.salary > salary && employee.age > age
  );
}

function getAllEmployeeNames(employees: Employee2[]): string[] {
  return employees.map((employee) => employee.name);
}

function getMaxSalary(employees: Employee2[]): number {
  return Math.max(...employees.map((employee) => employee.salary));
}

//use reduce
function getMaxSalary1(employees: Employee2[]): number {
  return employees.reduce(
    (maxSalary, employee) => Math.max(maxSalary, employee.salary),
    0
  );
}

function getAverageSalary(
  employees: Employee2[],
  filter?: (employee: Employee2) => boolean
): number {
  const filteredEmployees = filter ? employees.filter(filter) : employees;
  return (
    filteredEmployees.reduce((sum, employee) => sum + employee.salary, 0) /
    filteredEmployees.length
  );
}
