import { Divider, PageHeader } from '@arco-design/web-react';
import { IconLeft } from '@arco-design/web-react/icon';
import { clsx } from 'clsx';
import React, { PropsWithChildren, useContext } from 'react';
import { useWindowSize } from '../../../Hooks/useWindowSize';
import { ConsoleContext } from '../context';
import styles from '../styles.module.css';

export default function PageContainer({ children }: PropsWithChildren) {
  const { className, appName, back, routes, getCurrentRoute } = useContext(ConsoleContext);
  const currentRoute = getCurrentRoute(routes);

  const { height, width } = useWindowSize();

  return (
    <main className={styles['content']}>
      <div className={styles['container']} style={{ minHeight: width < 1024 ? height - 64 : height - 16 }}>
        <div className={clsx(className ?? 'max-w-[96rem]', 'mx-auto py-4')}>
          <div className="hidden lg:block">
            <PageHeader
              title={currentRoute?.name ?? appName}
              className="-mx-6"
              {...(back && {
                backIcon: <IconLeft />,
                onBack: () => history.back(),
              })}
            />
            <Divider className="mb-5 mt-0" />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}
