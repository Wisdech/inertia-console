import { Layout } from '@arco-design/web-react';
import { Head } from '@inertiajs/react';
import React, { PropsWithChildren } from 'react';
import { MobileNavigation, SiderNavigation } from './components/Navigation';
import PageContainer from './components/PageContainer';
import { default as DefaultSiderMenu } from './components/SiderMenu';
import { default as DefaultUserActions } from './components/UserActions';
import { ConsoleContext, LayoutContext } from './context';
import styles from './styles.module.css';
import { getCurrentRoute as defaultGetCurrentRoutes, UserInfo } from './utils';

export * from './utils';
export type LayoutProps<UserInfoType = UserInfo> = PropsWithChildren<Partial<LayoutContext<UserInfoType>>>;

export function ConsoleLayout(props: LayoutProps) {
  const { children, appName, routes, UserActions, SiderMenu, getCurrentRoute, ...contexts } = props;

  const currentRoute = (getCurrentRoute ?? defaultGetCurrentRoutes)(routes);

  const title = currentRoute?.name ?? '' + ' - ' + appName;

  const context: LayoutContext = {
    appName,
    routes,
    SiderMenu: SiderMenu ?? DefaultSiderMenu,
    UserActions: UserActions ?? DefaultUserActions,
    getCurrentRoute: getCurrentRoute ?? defaultGetCurrentRoutes,
    ...contexts,
  };

  return (
    <ConsoleContext.Provider value={context}>
      <Head title={title} />
      <Layout className={styles['layout']}>
        <Layout.Sider className={styles['sider']}>
          <SiderNavigation />
        </Layout.Sider>
        <Layout.Content>
          <MobileNavigation />
          <PageContainer>{children}</PageContainer>
        </Layout.Content>
      </Layout>
    </ConsoleContext.Provider>
  );
}
