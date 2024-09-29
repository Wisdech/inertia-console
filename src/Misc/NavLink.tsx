import { Link as ArcoLink } from '@arco-design/web-react';
import { InertiaLinkProps, Link } from '@inertiajs/react';
import React, { CSSProperties, ReactNode } from 'react';

type ArcoProps = {
  className?: string | string[];
  style?: CSSProperties;
  icon?: ReactNode | boolean;
  status?: 'error' | 'success' | 'warning';
  disabled?: boolean;
  hoverable?: boolean;
};

type InertiaProps = Omit<InertiaLinkProps, 'className' | 'style' | 'disabled'>;

export function NavLink(props: InertiaProps & ArcoProps) {
  const { className, style, icon, status, disabled, hoverable, ...inertia } = props;

  return (
    <ArcoLink {...{ className, style, icon, status, disabled, hoverable }}>
      <Link {...inertia} disabled={disabled}>
        {inertia.children}
      </Link>
    </ArcoLink>
  );
}
