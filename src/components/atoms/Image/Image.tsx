import Images, { ImageNames } from 'assets/images';
import React, { memo } from 'react';

export interface ImageProps {
  name: ImageNames;
  alt: string;
  className?: string;
  width: number | string;
  height: number | string;
}

function ImageComponent({
  className,
  name,
  width,
  height,
  alt,
}: ImageProps): JSX.Element {
  return (
    <img
      src={Images[name]}
      width={width}
      height={height}
      className={className}
      alt={alt}
    />
  );
}

ImageComponent.defaultProps = {
  className: undefined,
};

export const Image = memo(ImageComponent);
