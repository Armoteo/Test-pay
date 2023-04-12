import $api from '../http';
import { API_ROUTES } from '../constants/routes';
import { STRINGS } from '../constants/auth';

export default class AuthServices {
  static async signUp(firstName: string, lastName: string, email: string, password: string) {
    return $api.post(
      API_ROUTES.SIGN_UP,
      {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      },
    );
  }

  static async resendEmail(email: string) {
    return $api.post(
      API_ROUTES.RESEND_EMAIL,
      {
        email,
      },
    );
  }

  static async confirmEmail(token: string) {
    return $api.post(
      API_ROUTES.CONFIRM_EMAIL,
      {
        confirmation_token: token,
        scope: STRINGS.MANAGER,
      },
    );
  }

  static async login(email: string, password: string) {
    return $api.post(
      API_ROUTES.SIGN_IN,
      { email, password, scope: STRINGS.MANAGER },
    );
  }

  static async logout() {
    return $api.post(API_ROUTES.SIGN_OUT);
  }

  static async resetPassword(newPassword: string | undefined, token: string) {
    return $api.post(
      API_ROUTES.RESET_PASSWORD,
      {
        reset_password_token: token,
        new_password: newPassword,
        scope: STRINGS.MANAGER,
      },
    );
  }

  static async forgotPassword(email: string) {
    return $api.post(
      API_ROUTES.FORGOT_PASSWORD,
      {
        email,
        scope: STRINGS.MANAGER,
      },
    );
  }
}
