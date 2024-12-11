import { GoBack } from 'presentation/atomic-component/atom';
import type { FC } from 'react';

export const FinancialContent: FC = () => {
  return (
    <div className={'flex flex-col gap-4'}>
      <div>
        <GoBack />
      </div>

      <div className={'flex'}>
        <h1>Financeiro</h1>
      </div>
    </div>
  );
};
