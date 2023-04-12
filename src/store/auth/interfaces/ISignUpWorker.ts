import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

export interface ISignUpResponse {
  data: {
    data: {
      accessToken: string,
      refreshToken: string,
      scope: string;
    },
  },
}

export interface SignUpProps {
  fields: {
    firstName: string;
    lastName: string;
    email: string;
    password: string
  },
  setError: Dispatch<SetStateAction<string>>,
  router: NextRouter,
  validationErrors: string[]
}

export interface ResendEmailProps {
  email: string;
}

export interface EmailConfirmProps {
  token: string;
  router: NextRouter;
}

export interface ForgotPassProps {
  fields: {
    email: string;
  },
  setError: Dispatch<SetStateAction<string>>,
}

export interface ResetPassProps {
  fields: {
    newPassword: string | undefined;
    confirmPassword: string;
  },
  token: string;
  router: NextRouter;
}

export interface IForgotPassResponse {
  data: {
    data: string;
  },
}
