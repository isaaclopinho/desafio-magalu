import { toast } from 'react-toastify';

export const notifyDefault = (str: string): void => {
  toast(str, { type: 'default' });
};

export const notifySuccess = (str: string): void => {
  toast(str, { type: 'success' });
};

export const notifyError = (str: string): void => {
  toast(str, { type: 'error' });
};
