import { Avatar, Divider, Dropdown, Menu } from '@arco-design/web-react';
import { IconUp } from '@arco-design/web-react/icon';
import { ArrowRightStartOnRectangleIcon as LogoutIcon, UserIcon } from '@heroicons/react/16/solid';
import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import React from 'react';
import styles from '../styles.module.css';
import { UserInfo } from '../utils';

function IconMenuItem({ icon, title }: { icon: React.FC<{ className?: string }>; title: string }) {
  const Icon = icon;
  return (
    <div className="flex h-9 w-48 items-center">
      <Avatar className="-ml-0.5 h-6 w-6 bg-transparent">
        <Icon className="size-6 text-zinc-600" />
      </Avatar>
      <span className="ml-2 text-sm">{title}</span>
    </div>
  );
}

function DropdownList({ hideLogout = false, logoutUri = '/logout', profileUri = '/profile' }) {
  return (
    <Menu className={styles['action']}>
      <Menu.Item key="profile" className="rounded-lg">
        <Link href={profileUri}>
          <IconMenuItem icon={UserIcon} title="个人信息" />
        </Link>
      </Menu.Item>
      {!hideLogout && (
        <>
          <Divider className="my-1" />
          <Menu.Item key="logout" className="rounded-lg">
            <Link href={logoutUri} method="post">
              <IconMenuItem icon={LogoutIcon} title="退出账号" />
            </Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
}

type UserActionsProps = {
  mobile?: boolean;
  user?: UserInfo;
  accountKey?: keyof UserInfo;
  hideLogout?: boolean;
  logoutUri?: string;
  profileUri?: string;
};

export default function UserActions(props: UserActionsProps) {
  const { mobile = false, user, accountKey, hideLogout, profileUri, logoutUri } = props;

  return (
    <Dropdown
      trigger="click"
      position={mobile ? 'br' : 'tl'}
      droplist={<DropdownList {...{ hideLogout, profileUri, logoutUri }} />}
    >
      <a className="trigger">
        <div className={clsx('flex items-center', mobile ? 'size-10 justify-around' : 'w-48')}>
          <Avatar className={clsx('bg-[rgb(var(--primary-6))]', mobile ? 'size-7' : 'size-8')} shape="square">
            {user?.name}
          </Avatar>
          <div className={clsx('ml-0.5 flex flex-col', mobile && 'hidden')}>
            <span className="ml-2 text-sm">{user?.name}</span>
            <span className="ml-2 w-32 overflow-hidden text-ellipsis whitespace-nowrap text-xs">
              {accountKey && user?.[accountKey]}
            </span>
          </div>
        </div>
        <IconUp className={clsx('ml-auto', mobile && 'hidden')} />
      </a>
    </Dropdown>
  );
}
