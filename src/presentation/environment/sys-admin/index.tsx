import { GoBack } from 'presentation/atomic-component/atom';
import type { FC } from 'react';

export const SysAdminContent: FC = () => {
  return (
    <div className={'flex flex-col gap-4'}>
      <div>
        <GoBack />
      </div>

      <div className={'flex flex-wrap gap-4'} />
    </div>
  );
};
