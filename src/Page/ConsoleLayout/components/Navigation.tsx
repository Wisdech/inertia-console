import { Divider } from '@arco-design/web-react';
import * as Headless from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { clsx } from 'clsx';
import React, { useContext, useState } from 'react';
import { ConsoleContext } from '../context';
import styles from '../styles.module.css';
import { getCurrentRoute } from '../utils';

export function SiderNavigation() {
  const { SiderMenu, UserActions, routes, user, accountKey, hideLogout, appName, favicon, logoutUri, profileUri } =
    useContext(ConsoleContext);

  return (
    <>
      <div className={styles['sider-header']}>
        <img alt="" className={styles['site-logo']} src={favicon} />
        <span className={clsx(styles['site-name'])}>{appName}</span>
      </div>
      <div>
        <Divider className="my-4" />
        <SiderMenu routes={routes} />
      </div>
      <div className={styles['sider-footer']}>
        <UserActions {...{ user, accountKey, hideLogout, logoutUri, profileUri }} />
      </div>
    </>
  );
}

export function MobileNavigation() {
  const { appName, SiderMenu, UserActions, routes, user, accountKey, hideLogout, favicon, logoutUri, profileUri } =
    useContext(ConsoleContext);

  const currentRoute = getCurrentRoute(routes);

  const [siderOpen, setSiderOpen] = useState(false);

  function open() {
    setSiderOpen(true);
  }

  function close() {
    setSiderOpen(false);
  }

  return (
    <>
      <header className={styles['mobile-nav']}>
        <a className="px-2 py-2.5" onClick={open}>
          <img alt="" className="size-7 rounded" src={favicon} />
        </a>
        <span className="text-lg font-bold">{currentRoute?.name ?? appName}</span>
        <div className="py-2.5">
          <UserActions {...{ user, accountKey, hideLogout, logoutUri, profileUri, mobile: true }} />
        </div>
      </header>
      <Divider className="my-0" />
      <Headless.Transition show={siderOpen}>
        <Headless.Dialog onClose={close} className="lg:hidden">
          <Headless.TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Headless.TransitionChild>
          <Headless.TransitionChild
            enter="ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Headless.DialogPanel className={styles['mobile-panel']}>
              <div className={styles['mobile-panel-content']}>
                <div className="px-4 pt-3">
                  <Headless.CloseButton>
                    <XMarkIcon className="size-6 text-zinc-600" />
                  </Headless.CloseButton>
                </div>
                <SiderMenu routes={routes} />
              </div>
            </Headless.DialogPanel>
          </Headless.TransitionChild>
        </Headless.Dialog>
      </Headless.Transition>
    </>
  );
}
