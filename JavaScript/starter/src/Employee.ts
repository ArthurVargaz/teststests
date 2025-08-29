//template literal type for emails:
type Email = `${string}@${string}.${string}`;

type Employee = {
  name: string;
  age: number;
  experience: number;
  address: {
    street: string;
    city: string;
    country: string;
    zip: number;
  };
  position: string;
  workAdress: {
    street: string;
    city: string;
    country: string;
    zip: number;
  };
  salary: number;
  phone: string;
  email: Email;
};

const jhon: Employee = {
  name: "Jhon",
  age: 24,
  experience: 3,
  address: {
    street: "Main St",
    city: "New York",
    country: "USA",
    zip: 10001,
  },
  position: "developer",
  workAdress: {
    street: "Main St",
    city: "New York",
    country: "NY",
    zip: 10001,
  },
  salary: 50000,
  phone: "123456787",
  email: "john@example.com",
};
