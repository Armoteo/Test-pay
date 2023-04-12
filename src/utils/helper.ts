import { ROUTES } from '../constants/routes';

export const setToLocalStorage = (key: string, data: string) => {
  window.localStorage.setItem(key, data);
};

export const getFromLocalStorage = (key : string) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
};

export const removeLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};

export const clearStorage = () => {
  window.localStorage.clear();
};

export const findIndexItem = (
  array: { [key: string]: string | number }[],
  name: string,
  id: string | number,
) => array.findIndex(
  (el) => el[name] === id,
);

const searchRequest = (array: string[], search: string) => {
  let items = [];
  items = array?.filter((item) => item.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  return search === '/' ? [] : items;
};

export const checkRoute = (route: string): boolean => {
  const array: string[] = Object.values(ROUTES);
  const result: string[] = searchRequest(array, `/${route.split('/')[1]}`);
  return result.length > 0;
};
