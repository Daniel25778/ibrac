import { IconButton, Slide } from '@mui/material';
import { IconRender } from 'presentation/atomic-component/atom';
import { Link } from 'react-router-dom';
import { Role } from 'domain/models';
import { SidebarItems } from 'main/mock';
import { SupervisorAccountOutlined } from '@mui/icons-material';
import { getUser, useSidebar } from 'store/persist/selector';
import { paths } from 'main/config';
import { setSidebar } from 'store/persist/slice';
import { useDispatch } from 'react-redux';
import { usePath } from 'data/hooks';
import type { FC } from 'react';

export const MobileSidebar: FC = () => {
  const dispatch = useDispatch();
  const sidebar = useSidebar();
  const { lastPathname, allPathname, firstPathname } = usePath();

  const user = getUser();

  return (
    <Slide
      direction={'right'}
      in={sidebar}
      style={{
        overflow: 'auto'
      }}
    >
      <div
        className={
          'fixed z-40 border-t border-gray-700 bg-primary w-full h-[calc(100dvh)] mt-[-1px] text-white'
        }
      >
        <div
          className={
            'fixed z-40 bg-primary gray-800 dark:border-0 py-5 px-2 h-[calc(88vh-90px)] flex flex-col gap-[10px] justify-between w-full overflow-auto'
          }
        >
          <div className={`fixed z-5 w-full left-0 bg-primary ${sidebar ? 'flex' : 'hidden'}`} />

          <div className={'flex flex-col gap-[10px] overflow-auto'}>
            {user.role === Role.admin ? (
              <Link to={paths.panel}>
                <div
                  className={'px-3 cursor-pointer'}
                  onClick={(): void => {
                    dispatch(setSidebar(false));
                  }}
                  title={'Painel'}
                >
                  <div
                    className={`flex gap-4 items-center rounded-md ml-[-5px] pl-[5px] h-[40px] ${
                      firstPathname.startsWith('/painel') ? 'bg-gray-700 text-white' : ''
                    }`}
                  >
                    <IconButton
                      color={'inherit'}
                      sx={{
                        padding: '1px'
                      }}
                    >
                      <SupervisorAccountOutlined
                        name={'Painel'}
                        sx={{
                          fontSize: '1.95rem'
                        }}
                      />
                    </IconButton>

                    <span
                      className={`h-[1.5rem] font-semibold overflow-hidden cursor-pointer ${
                        firstPathname.startsWith('/painel') ? 'text-white' : 'text-white'
                      }`}
                    >
                      Painel
                    </span>
                  </div>
                </div>
              </Link>
            ) : null}

            <Link to={paths.home}>
              <div
                className={'px-3 cursor-pointer'}
                onClick={(): void => {
                  dispatch(setSidebar(false));
                }}
                title={'Home'}
              >
                <div
                  className={`flex gap-4 items-center rounded-md ml-[-5px] pl-[5px] h-[40px] ${
                    lastPathname === 'plataforma' ? 'bg-gray-700 text-white' : ''
                  }`}
                >
                  <IconButton
                    color={'inherit'}
                    sx={{
                      padding: '1px'
                    }}
                  >
                    <IconRender
                      name={'Home'}
                      sx={{
                        fontSize: '1.95rem'
                      }}
                    />
                  </IconButton>

                  <span
                    className={`h-[1.5rem] font-semibold overflow-hidden cursor-pointer ${
                      lastPathname === 'plataforma' ? 'text-white' : 'text-white'
                    }`}
                  >
                    Home
                  </span>
                </div>
              </div>
            </Link>

            {SidebarItems.map((sidebarItem) => (
              <Link key={sidebarItem.name} to={sidebarItem.link}>
                <div
                  className={'px-3 cursor-pointer'}
                  onClick={(): void => {
                    dispatch(setSidebar(false));
                  }}
                  title={sidebarItem.name}
                >
                  <div
                    className={`flex gap-4 items-center rounded-md ml-[-5px] pl-[5px] h-[40px] ${
                      allPathname.includes(sidebarItem.keyword) ? 'bg-gray-700 text-white' : ''
                    }`}
                  >
                    {sidebarItem.icon}

                    <span
                      className={`h-[1.5rem] font-semibold overflow-hidden cursor-pointer ${
                        allPathname.includes(sidebarItem.keyword) ? 'text-white' : 'text-white'
                      }`}
                    >
                      {sidebarItem.name}
                    </span>
                  </div>
                </div>{' '}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};
