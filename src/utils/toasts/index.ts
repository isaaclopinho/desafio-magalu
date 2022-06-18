import { toast } from 'react-toastify';

export const notify = (
  str: string,
  type: 'default' | 'error' | 'success'
): void => {
  toast(str, { type });
};
