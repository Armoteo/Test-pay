import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { IAuth } from './interfaces/IAuth';
import { IAction } from './interfaces/IAction';
import AuthServices from '../../services/authService';
import { IResponse, LoginProps } from './interfaces/ILoginWorker';
import {
  EmailConfirmProps,
  ISignUpResponse,
  ResendEmailProps,
  SignUpProps,
  ForgotPassProps,
  IForgotPassResponse,
  ResetPassProps,
} from './interfaces/ISignUpWorker';
import { setToLocalStorage } from '../../utils/helper';
import {
  newValidateErrors,
  validateErrors,
  validateForgotPassForm,
  validateSignUpForm,
  validateLoginForm,
  validateResetPassForm,
} from '../../utils/validations';
import { ROUTES } from '../../constants/routes';

export const initialState: IAuth = {
  fields: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    newPassword: '',
    confirmPassword: '',
  },
  formErrors: {},
};

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (userData: LoginProps, { rejectWithValue }) => {
    const {
      fields: { email, password }, setError, router,
    } = userData;
    try {
      const errors = validateErrors(userData.fields, validateLoginForm, {});
      if (errors) {
        return rejectWithValue({ errors });
      }
      const response:IResponse = await AuthServices.login(email, password);
      return { response: response.data, router };
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setError((error?.response?.data as string) ?? 'An unexpected error occurred');
      } else {
        setError('An unexpected error occurred');
      }
      return rejectWithValue(error);
    }
  },
);

export const signUpAsync = createAsyncThunk(
  'auth/signUp',
  async (signUpData: SignUpProps, { rejectWithValue }) => {
    const {
      fields: {
        email,
        password,
        firstName,
        lastName,
      },
      setError,
      router,
      validationErrors,
    } = signUpData;

    try {
      const errors = validateErrors(signUpData.fields, validateSignUpForm, { validationErrors });
      if (errors) {
        return rejectWithValue({ errors });
      }
      const response: ISignUpResponse = await AuthServices.signUp(firstName, lastName, email, password);
      setToLocalStorage('email', email);
      return {
        response: response.data.data,
        router,
      };
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setError((error?.response?.data as string) ?? 'An unexpected error occurred');
      } else {
        setError('An unexpected error occurred');
      }
      return rejectWithValue(error);
    }
  },
);

export const resendEmailAsync = createAsyncThunk(
  'auth/resendEmail',
  async (emailData: ResendEmailProps, { rejectWithValue }) => {
    const {
      email,
    } = emailData;

    try {
      const response: ISignUpResponse = await AuthServices.resendEmail(email);
      return {
        response: response.data.data,
      };
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

export const confirmEmailAsync = createAsyncThunk(
  'auth/confirmEmail',
  async (tokenData: EmailConfirmProps, { rejectWithValue }) => {
    const {
      token, router,
    } = tokenData;

    try {
      const response: ISignUpResponse = await AuthServices.confirmEmail(token);
      return {
        response: response.data.data,
        router,
      };
    } catch (error: unknown) {
      await router.push(ROUTES.LOGIN);
      return rejectWithValue(error);
    }
  },
);

export const forgotPassAsync = createAsyncThunk(
  'auth/forgotPass',
  async (emailData: ForgotPassProps, { rejectWithValue }) => {
    const {
      fields: { email },
      setError,
    } = emailData;

    try {
      const errors = validateErrors(emailData?.fields, validateForgotPassForm, {});
      if (errors) {
        return rejectWithValue({ errors });
      }
      const response: IForgotPassResponse = await AuthServices.forgotPassword(email);
      return {
        response: response.data.data,
      };
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setError((error?.response?.data as string) ?? 'An unexpected error occurred');
      } else {
        setError('An unexpected error occurred');
      }

      return rejectWithValue(error);
    }
  },
);

export const resetPassAsync = createAsyncThunk(
  'auth/resetPass',
  async (passwordData: ResetPassProps, { rejectWithValue }) => {
    const {
      fields: { newPassword },
      token,
      router,
    } = passwordData;

    try {
      const errors = validateErrors(passwordData?.fields, validateResetPassForm, {
        newPassword,
      });
      if (errors) {
        return rejectWithValue({ errors });
      }
      const response: IForgotPassResponse = await AuthServices.resetPassword(newPassword, token);
      return {
        response: response.data.data,
        router,
      };
    } catch (error: unknown) {
      await router.push(ROUTES.LOGIN);
      return rejectWithValue(error);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: () => initialState,
    setFieldsData: (state: IAuth, action: PayloadAction<IAction>) => {
      state.fields = {
        ...state.fields,
        ...action.payload,
      };
      state.formErrors = {
        ...state.formErrors,
        ...newValidateErrors({ ...action.payload }, validateSignUpForm),
      };
    },
    setFieldsDataLogin: (state: IAuth, action: PayloadAction<IAction>) => {
      state.fields = {
        ...state.fields,
        ...action.payload,
      };
      state.formErrors = {
        ...state.formErrors,
        ...newValidateErrors({ ...action.payload }, validateLoginForm),
      };
    },
  },
  extraReducers:
        (builder) => {
          builder
            .addCase(signUpAsync.fulfilled, (state: IAuth, action) => {
              action.payload.router.push(ROUTES.CONFIRM_EMAIl)
                .catch((error: string) => setToLocalStorage('signUpError', error));
            })
            .addCase(signUpAsync.rejected, (state: IAuth, action) => {
              const { errors } = action.payload as { errors: { [key: string]: string } };
              state.formErrors = errors;
            });
          builder
            .addCase(loginAsync.fulfilled, (state: IAuth, action) => {
              Cookies.set('accessToken', action.payload.response.access_token);
              Cookies.set('refreshToken', action.payload.response.refresh_token);
              action.payload.router.push(ROUTES.HOME)
                .catch((error: string) => setToLocalStorage('loginError', error));
            })
            .addCase(loginAsync.rejected, (state: IAuth, action) => {
              const { errors } = action.payload as { errors: { [key: string]: string } };
              state.formErrors = errors;
            });
          builder
            .addCase(forgotPassAsync.rejected, (state: IAuth, action) => {
              const { errors } = action.payload as { errors: { [key: string]: string } };
              state.formErrors = errors;
            });
          builder
            .addCase(resetPassAsync.rejected, (state: IAuth, action) => {
              const { errors } = action.payload as { errors: { [key: string]: string } };
              state.formErrors = errors;
            });
        },
});

export const { setFieldsData, setFieldsDataLogin, resetState } = authSlice.actions;

export default authSlice.reducer;
