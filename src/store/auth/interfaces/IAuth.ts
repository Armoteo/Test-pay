export interface IAuth {
  fields: {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    newPassword: string;
    confirmPassword: string;
  },
  formErrors?: {
    firstName?: string;
    lastName?: string;
    password?: string;
    email?: string;
    newPassword?: string;
    confirmPassword?: string;
  }
}
