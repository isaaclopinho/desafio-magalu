import moment from 'moment';

export const formatDate = ({
  date,
  mask,
}: {
  date: string | undefined;
  mask: string;
}): string => {
  try {
    if (!moment(date).isValid()) {
      throw new Error('date is invalid');
    }

    return moment(date).format(mask);
  } catch {
    return '-';
  }
};
