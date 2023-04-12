export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  FORGOT_PASSWORD: '/forgot-password',
  CONFIRM_EMAIl: '/confirm-email',
};

export const emptyRoutes = '/';

export const API_ROUTES = {
  SIGN_UP: 'auth/register_manager',
  RESEND_EMAIL: 'auth/resend_confirm_email',
  CONFIRM_EMAIL: 'auth/confirm_email',
  SIGN_IN: 'auth/token',
  SIGN_OUT: '/sign-out',
  RESET_PASSWORD: 'auth/reset_password',
  FORGOT_PASSWORD: 'auth/forgot_password',
};
