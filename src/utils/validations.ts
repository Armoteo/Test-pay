import { STRINGS } from '../constants/auth';

type Fields = string | object;

type ValidationFunction = (
  fieldName: string,
  fieldData: string,
  dependencies: Record<string, unknown>
) => string | undefined;

export const validateErrors = (
  fields: Fields,
  validationFunction: ValidationFunction,
  dependencies = {},
) => {
  const errors = Object.entries(fields).reduce((acc, [fieldName, fieldData]) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const error = validationFunction(fieldName, fieldData, dependencies);
    return error ? { ...acc, [fieldName]: error } : acc;
  }, {});
  return Object.keys(errors).length > 0 && errors;
};

export const newValidateErrors = (
  fields: Fields,
  validationFunction: ValidationFunction,
  dependencies: Record<string, unknown> = {},
) => {
  const errors = Object.entries(fields).reduce((acc, [fieldName, fieldData]) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const error = validationFunction(fieldName, fieldData, dependencies);
    return { ...acc, [fieldName]: error || '' };
  }, {});
  return Object.keys(errors).length > 0 && errors;
};

const containsNumber = (value: string) => {
  const regex = /\d/;
  return regex.test(value);
};

const containsUpperCase = (value: string) => {
  const regex = /[A-Z]/;
  return regex.test(value);
};

const containsLowerCase = (value: string) => {
  const regex = /[a-z]/;
  return regex.test(value);
};

const isEmailValid = (value: string) => {
  const atIndex = value.indexOf('@');
  const dotIndex = value.lastIndexOf('.');
  if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= value.length) {
    return false;
  }
  const forbiddenChars = /[()<>;:\\/"[\],]/;
  if (forbiddenChars.test(value)) {
    return false;
  }
  return true;
};

export const validationPassword = (value: string) => {
  const error = [];
  if (value.length < 8) {
    error.push(STRINGS.MIN_LENGTH);
  }
  if (!containsNumber(value)) {
    error.push(STRINGS.ONE_NUMBER);
  }
  if (!containsUpperCase(value)) {
    error.push(STRINGS.ONE_UPPERCASE);
  }
  if (!containsLowerCase(value)) {
    error.push(STRINGS.ONE_LOWERCASE);
  }

  return error;
};

export const validateSignUpForm = (field: string, value: string, dependencies: { validationErrors?: string[] }) => {
  let error;
  if (field === STRINGS.FIRST_NAME) {
    if (!value) {
      error = STRINGS.FIRST_NAME_REQUIRED;
    }
  }
  if (field === STRINGS.LAST_NAME) {
    if (!value) {
      error = STRINGS.LAST_NAME_REQUIRED;
    }
  }
  if (field === STRINGS.EMAIL) {
    if (!value) {
      error = STRINGS.EMAIL_REQUIRED;
    } else if (!isEmailValid(value)) {
      error = STRINGS.INCORRECT_FORMAT;
    }
  }
  if (field === STRINGS.PASSWORD) {
    if (!value) {
      error = STRINGS.PASSWORD_REQUIRED;
    } else if (dependencies?.validationErrors && dependencies?.validationErrors?.length > 0) {
      error = STRINGS.PASSWORD_NOT_VALID;
    }
  }
  return error;
};

export const validateForgotPassForm = (field: string, value: string) => {
  let error;
  if (field === STRINGS.EMAIL) {
    if (!value) {
      error = STRINGS.EMAIL_REQUIRED;
    } else if (!isEmailValid(value)) {
      error = STRINGS.INCORRECT_FORMAT;
    }
  }

  return error;
};

export const validateLoginForm = (field: string, value: string) => {
  let error;
  if (field === STRINGS.EMAIL) {
    if (!value) {
      error = STRINGS.EMAIL_REQUIRED;
    } else if (!isEmailValid(value)) {
      error = STRINGS.INCORRECT_FORMAT;
    }
  }
  if (field === STRINGS.PASSWORD) {
    if (!value) {
      error = STRINGS.PASSWORD_REQUIRED;
    } else if (value.length < STRINGS.MIN_PASSWORD_LENGTH) {
      error = STRINGS.MIN_LENGTH;
    }
  }
  return error;
};

export const validateResetPassForm = (field: string, value: string, dependencies:
{ newPassword?: string }) => {
  let error;

  if (field === STRINGS.NEW_PASSWORD) {
    if (!value) {
      error = STRINGS.NEW_PASSWORD_REQUIRED;
    } else if (value.length < STRINGS.MIN_PASSWORD_LENGTH) {
      error = STRINGS.MIN_LENGTH;
    }
  }
  if (field === STRINGS.CONFIRM_PASSWORD) {
    if (!value) {
      error = STRINGS.CONFIRM_PASSWORD_REQUIRED;
    } else if (value.length < STRINGS.MIN_PASSWORD_LENGTH) {
      error = STRINGS.MIN_LENGTH;
    } else if (dependencies?.newPassword && value !== dependencies?.newPassword) {
      error = STRINGS.DONT_MATCH;
    }
  }
  return error;
};
