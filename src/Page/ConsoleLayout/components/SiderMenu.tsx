import { Menu } from '@arco-design/web-react';
import { router } from '@inertiajs/react';
import React from 'react';
import styles from '../styles.module.css';
import { getCurrentRoute, RouteItem } from '../utils';

export default function SiderMenu({ routes }: { routes?: RouteItem[] }) {
  const current = getCurrentRoute(routes);

  const renderRoute = (_routes?: RouteItem[]) => {
    return (
      _routes?.map((route) => {
        if (route.ignore) return;

        if (route.children?.length) {
          const title = (
            <span className="px-1">
              {route.icon && <route.icon />}
              {route.name}
            </span>
          );

          return (
            <Menu.SubMenu key={route.path} title={title}>
              {...renderRoute(route.children)}
            </Menu.SubMenu>
          );
        } else {
          return (
            <Menu.Item key={route.path}>
              {current == route && <span className="active" />}
              <div className="menu-item-title">
                {route.icon && <route.icon />}
                {route.name}
              </div>
            </Menu.Item>
          );
        }
      }) ?? []
    );
  };

  return (
    <Menu
      selectedKeys={[current?.path ?? '']}
      className={styles['sider-menu']}
      onClickMenuItem={(key) => router.get(key)}
    >
      {renderRoute(routes)}
    </Menu>
  );
}
