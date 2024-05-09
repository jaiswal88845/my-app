export interface Doctor {
  id?: string;
  name: string;
  email: string;
  age: number;
}
export interface DoctorErrors {
  name?: string;
  email?: string;
  age?: string;
}