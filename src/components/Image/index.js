import { useState } from 'react';
import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';
import images from '~/assets/images';

function Image({ className, src, alt, fallback: customFallback = images.noImage }, ref) {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback);
  };
  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
