import { IconNames } from 'assets/icons';
import {
  FontColors,
  FontWeightType,
  Icon,
  Typography,
  TypographyType,
} from 'components/atoms';
import React, { memo } from 'react';
import styles from './IconText.module.scss';

export interface IconTextProps {
  iconName: IconNames;
  iconSize: number;
  fontWeight: FontWeightType;
  fontColor: FontColors;
  fontType: TypographyType;
  text: string;
  className?: string;
  textClassName?: string;
}

function IconTextComponent({
  iconName,
  iconSize,
  fontWeight,
  fontColor,
  fontType,
  text,
  className,
  textClassName,
}: IconTextProps): JSX.Element {
  return (
    <div className={`${styles.Main} ${className}`}>
      <Icon name={iconName} size={iconSize} className={styles.mr} />
      <Typography
        type={fontType}
        color={fontColor}
        weight={fontWeight}
        className={textClassName}
      >
        {text}
      </Typography>
    </div>
  );
}

IconTextComponent.defaultProps = {
  className: undefined,
  textClassName: undefined,
};

const propsAreEqual = (
  prevProps: IconTextProps,
  nextProps: IconTextProps
): boolean => {
  const propsToCompare: Array<keyof IconTextProps> = [
    'fontColor',
    'fontWeight',
    'className',
    'text',
    'textClassName',
  ];
  return propsToCompare.every((prop) => prevProps[prop] === nextProps[prop]);
};

export const IconText = memo(IconTextComponent, propsAreEqual);
