import React from 'react';
import { Model } from '../../utils/types';

export type RouteItem = {
  path: string;
  name: string;
  icon?: React.FC;
  ignore?: boolean;
  children?: RouteItem[];
  permissions?: string[];
};

export type UserInfo<IdType = number> = Model<IdType> & {
  name: string;
  email?: string;
  mobile?: string;
};

export function getCurrentRoute(routes?: RouteItem[]) {
  const current = location.href;
  return routes?.find((route) => current.startsWith(route.path));
}
