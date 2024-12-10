import { type FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const AuthTemplate: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={'flex w-full h-full min-h-dvh'} id={'main'}>
      <main className={'flex flex-col w-full h-full min-h-dvh items-center justify-center py-6'}>
        <Outlet />
      </main>

      <div
        className={
          'relative w-full items-center justify-center tablet:flex-col gap-4 hidden h-dvh tablet:flex'
        }
        style={{
          backgroundBlendMode: 'hue',
          backgroundImage: 'url(/ibrac-background.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100%'
        }}
      >
        <img alt={'Logo da ibrac'} className={'w-[250px]'} src={'ibrac-logo.png'} />

        <h2 className={'text-white text-4xl italic font-bold uppercase text-center'}>
          cadeia de suprimentos
        </h2>
      </div>
    </div>
  );
};
