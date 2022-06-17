import { IconNames } from 'assets/icons';
import { Icon, Typography } from 'components/atoms';
import React, { memo } from 'react';
import styles from './CounterSection.module.scss';

export interface CounterSectionProps {
  title: string;
  amount: number;
  iconName: IconNames;
}

function CounterSectionComponent({
  title,
  amount,
  iconName,
}: CounterSectionProps): JSX.Element {
  return (
    <div>
      <Typography type="p1" weight="bold" className={styles.mb}>
        {title}
      </Typography>
      <div className={styles.row}>
        <Icon name={iconName} size={24} className={styles.mr} />
        <Typography type="p2">{amount}</Typography>
      </div>
    </div>
  );
}

const propsAreEqual = (
  prevProps: CounterSectionProps,
  nextProps: CounterSectionProps
): boolean => {
  const propsToCompare: Array<keyof CounterSectionProps> = [];
  return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const CounterSection = memo(CounterSectionComponent, propsAreEqual);
