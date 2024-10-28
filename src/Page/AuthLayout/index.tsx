import { Head } from '@inertiajs/react';
import { clsx } from 'clsx';
import React, { PropsWithChildren } from 'react';
import { useWindowSize } from '../../Hooks/useWindowSize';
import styles from './styles.module.css';

type AuthLayoutProps = PropsWithChildren<{ title?: string; appName?: string; background?: string; favicon?: string }>;

export function AuthLayout(props: AuthLayoutProps) {
  const { title, appName, background, favicon, children } = props;

  const { height } = useWindowSize();

  return (
    <>
      <Head title={`${title} - ${appName}`} />
      <div
        className={styles['layout']}
        style={{
          height,
          backgroundImage: `url(${background})`,
        }}
      >
        <main className={styles['content']}>
          <div className={styles['container']}>
            <div className="flex items-center pb-8">
              <img alt="Logo" className="h-12 w-12 rounded-lg" src={favicon} />
              <span className={clsx('ml-4 mt-2 text-xl font-black')}>{appName}</span>
            </div>
            <div>{children}</div>
          </div>
        </main>
      </div>
    </>
  );
}
