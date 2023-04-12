import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

export interface ILoginWorker {
  payload: {
    email: string,
    password: string,
    setError: Dispatch<SetStateAction<string>>,
    history: NextRouter,
  },
}

export interface IResponse {
  data: {
    access_token: string,
    refresh_token: string,
  }
}

export interface LoginProps {
  fields: {
    email: string;
    password: string
  },
  setError: Dispatch<SetStateAction<string>>,
  router: NextRouter,
}
