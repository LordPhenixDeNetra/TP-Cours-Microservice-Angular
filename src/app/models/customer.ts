export interface CustomerData {
  message:  null;
  customers: Customer[];
  success:  boolean;
}

export interface Customer {
  id:           number;
  name:         string;
  email:        string;
  phoneNumber:  string;
  address:      string;
  commandCount: number;
}

