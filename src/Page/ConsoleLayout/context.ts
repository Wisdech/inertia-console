import { createContext } from 'react';
import { default as DefaultSiderMenu } from './components/SiderMenu';
import { default as DefaultUserActions } from './components/UserActions';
import { getCurrentRoute, RouteItem, UserInfo } from './utils';

export type LayoutContext<UserInfoType = UserInfo> = {
  back?: boolean;
  appName?: string;
  className?: string;
  routes?: RouteItem[];
  favicon?: string;
  user?: UserInfoType;
  accountKey?: keyof UserInfoType;
  hideLogout?: boolean;
  logoutUri?: string;
  profileUri?: string;
  SiderMenu: typeof DefaultSiderMenu;
  UserActions: typeof DefaultUserActions;
  getCurrentRoute: typeof getCurrentRoute;
};

export const ConsoleContext = createContext<LayoutContext>({
  SiderMenu: DefaultSiderMenu,
  UserActions: DefaultUserActions,
  getCurrentRoute: getCurrentRoute,
});
