import { GoBack } from 'presentation/atomic-component/atom';
import type { FC } from 'react';

export const SgiContent: FC = () => {
  return (
    <div className={'flex flex-col gap-4'}>
      <div>
        <GoBack />
      </div>

      <div className={'flex'}>
        <h1>SGI</h1>
      </div>
    </div>
  );
};
