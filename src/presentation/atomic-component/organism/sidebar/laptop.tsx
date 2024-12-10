import { type FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Role } from 'domain/models';
import { SidebarItems } from 'main/mock';
import { SupervisorAccountOutlined } from '@mui/icons-material';
import { getUser } from 'store/persist/selector';
import { paths } from 'main/config';
import { useAppSelector } from 'store';
import { usePath } from 'data/hooks';

interface LaptopSidebarProps {
  headerIsBig: boolean;
}

export const LaptopSidebar: FC<LaptopSidebarProps> = ({ headerIsBig }) => {
  const containerRef = useRef(null);
  const { open } = useAppSelector((state) => state.sidebar);
  const { allPathname, firstPathname } = usePath();
  const user = getUser();

  return (
    <div
      className={`flex flex-col fixed bg-primary pl-1 justify-between gap-3 h-max border-r-2 border-gray-500 py-4 transition-[width] ease-in-out  ${
        open ? 'w-[280px]' : 'w-[65px]'
      } ${headerIsBig ? 'min-h-[calc(100dvh-94px)]' : 'min-h-[calc(100dvh-65px)]'}`}
      ref={containerRef}
    >
      <div className={'flex flex-col justify-between gap-3 h-full pl-1'}>
        <div className={'flex flex-col gap-3'}>
          {user.role === Role.admin ? (
            <Link to={paths.panel}>
              <div className={'px-3 cursor-pointer'} title={'Painel'}>
                <div
                  className={`flex gap-4 items-center justify-start rounded-md ml-[-5px] pl-[5px] h-[40px] transition-[width] ease-in delay-75 ${
                    open ? 'w-full ' : 'w-[38px]'
                  } ${firstPathname.startsWith('/painel') ? 'bg-gray-700 text-white' : 'text-white hover:bg-[#4e4e4e67]'}`}
                >
                  <SupervisorAccountOutlined
                    name={'Painel'}
                    sx={{
                      fontSize: '1.65rem'
                    }}
                  />

                  <span
                    className={`h-[1.5rem] font-semibold transition-[width] ease-in-out overflow-hidden cursor-pointer ${
                      open ? 'w-[200px]' : 'w-[0px]'
                    } ${firstPathname.startsWith('/painel') ? 'text-white' : 'text-white'}`}
                  >
                    Painel
                  </span>
                </div>
              </div>
            </Link>
          ) : null}

          {SidebarItems.map((sidebarItem) => (
            <Link key={sidebarItem.name} to={sidebarItem.link}>
              <div className={'px-3 cursor-pointer'} title={sidebarItem.name}>
                <div
                  className={`flex gap-4 items-center justify-start  rounded-md ml-[-5px] pl-[5px] h-[40px] transition-[width] ease-in delay-75 ${
                    open ? 'w-full ' : 'w-[38px]'
                  } ${allPathname.includes(sidebarItem.keyword) ? 'bg-gray-700 text-white' : 'text-white hover:bg-[#4e4e4e67]'}`}
                >
                  {sidebarItem.icon}

                  <span
                    className={`h-[1.5rem] font-semibold  transition-[width] ease-in-out overflow-hidden cursor-pointer ${
                      open ? 'w-[200px]' : 'w-[0px]'
                    } ${allPathname.includes(sidebarItem.keyword) ? 'text-white' : 'text-white'}`}
                  >
                    {sidebarItem.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
