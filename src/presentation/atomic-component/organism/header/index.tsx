import { Collapse, IconButton, List, ListItemButton } from '@mui/material';
import { ExpandMore, Logout, Person } from '@mui/icons-material';
import { type FC, useEffect, useState } from 'react';
import { ImageModal } from 'presentation/atomic-component/molecule/modal';
import { Link, useLocation } from 'react-router-dom';
import { ToggleMenu } from 'presentation/atomic-component/atom';
import { colors } from 'presentation/style';
import { getUser } from 'store/persist/selector';
import { logout } from 'store/persist/slice';
import { paths } from 'main/config';
import { useDispatch } from 'react-redux';
import { useFindOneUserQuery } from 'infra/cache';

interface HeaderProps {
  headerIsBig: boolean;
}

export const Header: FC<HeaderProps> = ({ headerIsBig }) => {
  const [showUser, setShowUser] = useState(false);
  const { pathname } = useLocation();

  useEffect((): void => {
    if (showUser) setShowUser(false);
  }, [pathname]);

  const dispatch = useDispatch();
  const user = getUser();
  const userQuery = useFindOneUserQuery({ id: user.id });

  return (
    <header
      className={
        'flex fixed top-0 z-20 bg-primary border-b border-gray-500 items-center justify-between px-2 w-screen'
      }
      style={{
        height: headerIsBig ? '94px' : '65px',
        transition: 'all 200ms'
      }}
    >
      <div className={'flex w-full items-center gap-4 justify-start'}>
        <ToggleMenu />
      </div>

      <div className={'w-full flex flex-col items-center'}>
        <Link to={paths.home}>
          <img
            alt={'logo'}
            className={'rounded-full w-[180px] cursor-pointer'}
            onClick={(): void => {
              window.scrollTo({
                behavior: 'smooth',
                top: 0
              });
            }}
            src={'/ibrac-logo.png'}
            style={{
              marginTop: headerIsBig ? '8px' : '2px',
              transition: 'all 200ms'
            }}
          />
        </Link>
      </div>

      <div className={'bg-primary w-full relative'}>
        <Collapse
          className={'absolute top-0 right-0'}
          collapsedSize={'48px'}
          in={showUser}
          sx={{
            maxWidth: '235px',
            minWidth: showUser ? '235px' : undefined,
            top: headerIsBig ? '-23.5px' : '-24.5px',
            transition: 'all  150ms'
          }}
        >
          <div
            className={'flex flex-col'}
            style={{
              gap: headerIsBig ? '22px' : '8.5px',
              transition: 'all  150ms'
            }}
          >
            <div
              className={
                'flex  text-white justify-between gap-2 items-center ml-auto h-[48px] rounded-3xl'
              }
            >
              <ImageModal name={userQuery.data?.username} small url={userQuery.data?.avatar} />

              <div
                className={'flex flex-col gap-1'}
                style={{
                  opacity: showUser ? 'initial' : '0',
                  transition: 'all  200ms',
                  width: showUser ? '125px' : '0px'
                }}
              >
                <span className={'font-semibold  truncate'}>{userQuery.data?.username}</span>
              </div>

              <IconButton
                className={'text-white'}
                onClick={(): void => {
                  setShowUser(!showUser);
                }}
              >
                <ExpandMore
                  color={'inherit'}
                  sx={{
                    color: 'white',
                    rotate: showUser ? '180deg' : '0deg',
                    transition: 'all  200ms'
                  }}
                />
              </IconButton>
            </div>

            <List
              className={
                'flex bg-gray-700 text-white flex-col gap-1 border-2 border-t-0 border-gray-500 text-sm'
              }
              sx={{
                padding: '4px 0px'
              }}
            >
              <Link to={paths.profile}>
                <ListItemButton className={'gap-2'}>
                  <Person
                    sx={{
                      fontSize: '16px'
                    }}
                  />

                  <span>Perfil</span>
                </ListItemButton>
              </Link>

              <Link to={paths.login}>
                <ListItemButton
                  className={'gap-2'}
                  onClick={(): void => {
                    dispatch(logout());
                  }}
                  sx={{ color: 'white' }}
                >
                  <Logout
                    sx={{
                      color: colors.white,
                      fontSize: '16px'
                    }}
                  />
                  Sair
                </ListItemButton>
              </Link>
            </List>
          </div>
        </Collapse>
      </div>
    </header>
  );
};
