import clsx from 'clsx';
import React from 'react';
import LogoInvert from '../Assets/BrandLogo/Wisdech-Invert.svg';
import LogoNormal from '../Assets/BrandLogo/Wisdech-Normal.svg';

type LogoProps = React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean;
};

export function WisdechLogo({ className, invert = false, ...props }: LogoProps) {
  return invert ? (
    <LogoInvert className={clsx(className)} {...props} />
  ) : (
    <LogoNormal className={clsx(className)} {...props} />
  );
}
