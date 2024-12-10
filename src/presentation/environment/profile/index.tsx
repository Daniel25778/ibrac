/* eslint-disable @typescript-eslint/prefer-destructuring */
import { GoBack } from 'presentation/atomic-component/atom';
import { ImageModal, UserModal } from 'presentation/atomic-component/molecule/modal';
import { getUser } from 'store/persist/selector';
import { useFindOneUserQuery } from 'infra/cache';
import type { FC } from 'react';

export const ProfileContent: FC = () => {
  const user = getUser();

  const userQuery = useFindOneUserQuery({ id: user.id });

  return (
    <div className={'flex flex-col gap-12'}>
      <div>
        <GoBack />
      </div>

      <div className={'flex gap-4 items-center mx-auto  max-w-[450px]'}>
        <ImageModal name={userQuery.data?.username} url={userQuery.data?.avatar} />
        <div>{userQuery.data?.username}</div>
        {userQuery.data ? <UserModal user={userQuery.data} /> : null}
      </div>
    </div>
  );
};
