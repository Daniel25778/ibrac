import { Dns, ShoppingCartCheckout } from '@mui/icons-material';
import { GenericCard, GoBack } from 'presentation/atomic-component/atom';
import { paths } from 'main/config';
import type { FC } from 'react';

export const SupplyContent: FC = () => {
  return (
    <div className={'flex flex-col gap-4'}>
      <div>
        <GoBack />
      </div>

      <div className={'flex gap-10 px-96'}>
        <GenericCard
          description={
            'Lorem ipsum dolor sit amet consectetur. Tincidunt eros risus suspendisse enim ultricies lorem. Rhoncus amet bibendum dictum proin dui vestibulum interdum. '
          }
          startElement={
            <ShoppingCartCheckout className={'text-primary'} sx={{ fontSize: '50px' }} />
          }
          title={'Pedidos compra'}
        />

        <GenericCard
          description={
            'Lorem ipsum dolor sit amet consectetur. Tincidunt eros risus suspendisse enim ultricies lorem. Rhoncus amet bibendum dictum proin dui vestibulum interdum. '
          }
          link={paths.consult}
          startElement={<Dns className={'text-primary'} sx={{ fontSize: '50px' }} />}
          title={'Consulta'}
        />
      </div>
    </div>
  );
};
