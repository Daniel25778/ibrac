import { LoginForm } from 'presentation/atomic-component/molecule/form';
import type { FC } from 'react';

export const AuthContent: FC = () => {
  return (
    <div
      className={
        'flex flex-col gap-14 py-4 text-center overflow-auto justify-center tablet:w-[400px] mx-6 tablet:mx-auto'
      }
    >
      <div className={'flex flex-col gap-2'}>
        <h1 className={' font-bold text-4xl'}>Seja bem-vindo!</h1>
        <p>Entre em sua conta com e-mail e senha</p>
      </div>

      <LoginForm />
    </div>
  );
};
