interface Address {
  street: string;
  city: string;
  country: string;
  zip: number;
}

export interface Person {
  name: string;
  age: number;
  experience: number;
  address: Address;
  position: string;
  workAdress: Address;
  salary: number;
  phone: string;
  email: string;
}