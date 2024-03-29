import React from 'react';
import Spinner from './Spinner';

export default function Button({
  className,
  children,
  onClick,
  variant = 'primary',
  loading = false,
  disabled = false,
  ...rest
}) {
  return (
    <button
      // If you want to pass through any other unnamed attributes that may exist on teh componentÍ
      {...rest}
      style={{ position: 'relative' }}
      onClick={onClick}
      disabled={disabled || loading}
      className={'btn btn-' + variant + ' ' + className}
    >
      {children}

      {loading ? (
        <div
          style={{
            position: 'absolute',
            right: '2px',
            top: '2px',
          }}
        >
          <Spinner />
        </div>
      ) : (
        <></>
      )}
    </button>
  );
}
