import { type FC, useState } from 'react';
import { FetchOnScroll, GoBack, TableTemplate, TabsBase } from 'presentation/atomic-component/atom';
import { Inventory2Outlined, PersonOutline, ShowChart } from '@mui/icons-material';
import { Pagination } from 'presentation/atomic-component/molecule';
import { QueryName, apiPaths } from 'main/config';
import { Tab } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import { UserModal } from 'presentation/atomic-component/molecule/modal';
import { UserTableBody } from 'presentation/atomic-component/molecule/table/body';
import { UserTableHeader } from 'presentation/atomic-component/molecule/table/header';
import { classNameTab, sxTab } from 'main/utils';
import { useFindUserQuery } from 'infra/cache';
import { useInfiniteScroll, usePagination } from 'data/hooks';
import type { UserProps } from 'domain/models';

type TabPanelSelected = 'nfs' | 'products' | 'stock';
export const ConsultContent: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<TabPanelSelected>('products');
  const { handleChangePage, page } = usePagination();
  const userQuery = useFindUserQuery({ limit: 50, page });

  const { data, ...query } = useInfiniteScroll<UserProps>({
    limit: 8,
    queryName: QueryName.user,
    route: apiPaths.user
  });

  return (
    <div className={'flex flex-col gap-4'}>
      <div>
        <GoBack />
      </div>

      <div className={'flex  flex-col w-full '}>
        <TabContext value={selectedIndex}>
          <div className={'w-full '}>
            <TabsBase
              onChange={(_event, newValue): void => {
                setSelectedIndex(newValue as TabPanelSelected);
              }}
              selectedValue={selectedIndex}
            >
              <Tab
                label={
                  <div className={classNameTab(selectedIndex === 'products')}>
                    <ShowChart
                      color={'inherit'}
                      sx={{
                        fontSize: '30px'
                      }}
                    />

                    <span className={'text-[17px]'}>Produtos - SB1</span>
                  </div>
                }
                sx={sxTab(selectedIndex === 'products')}
                value={'products'}
                wrapped
              />

              <Tab
                label={
                  <div className={classNameTab(selectedIndex === 'nfs')}>
                    <PersonOutline
                      color={'inherit'}
                      sx={{
                        fontSize: '30px'
                      }}
                    />

                    <span className={'text-[17px]'}>NF´s - Entrada</span>
                  </div>
                }
                sx={sxTab(selectedIndex === 'nfs')}
                value={'nfs'}
                wrapped
              />

              <Tab
                label={
                  <div className={classNameTab(selectedIndex === 'stock')}>
                    <Inventory2Outlined
                      sx={{
                        fontSize: '30px'
                      }}
                    />

                    <span className={'text-[17px]'}>Estoque</span>
                  </div>
                }
                sx={sxTab(selectedIndex === 'stock')}
                value={'stock'}
                wrapped
              />

              {/* Don't remove this Tab*/}
              <Tab
                disabled
                sx={{
                  maxWidth: '1px',
                  minWidth: '1px !important',
                  padding: '0'
                }}
              />
            </TabsBase>
          </div>

          <div className={'w-full'}>
            <TabPanel value={'products'}>
              <div className={'flex flex-col'}>
                {userQuery.data ? (
                  <div className={'flex flex-col gap-6 w-full mx-auto'}>
                    <div className={'flex justify-end'}>
                      <UserModal />
                    </div>

                    <FetchOnScroll query={query}>
                      <TableTemplate
                        tableBody={<UserTableBody items={data || []} />}
                        tableHeader={<UserTableHeader />}
                      />
                    </FetchOnScroll>
                  </div>
                ) : null}
              </div>
            </TabPanel>

            <TabPanel value={'nfs'}>
              <div className={'flex flex-col'}>
                {userQuery.data ? (
                  <div className={'flex flex-col gap-6 w-full mx-auto'}>
                    <div className={'flex justify-end'}>
                      <UserModal />
                    </div>

                    <TableTemplate
                      tableBody={<UserTableBody items={userQuery.data?.content ?? []} />}
                      tableHeader={<UserTableHeader />}
                    />

                    <Pagination
                      handleChangePage={handleChangePage}
                      page={page}
                      totalPages={userQuery.data.totalPages}
                    />
                  </div>
                ) : null}
              </div>
            </TabPanel>

            <TabPanel value={'stock'}>
              <div className={'flex flex-col'}>
                {userQuery.data ? (
                  <div className={'flex flex-col gap-6 w-full mx-auto'}>
                    <div className={'flex justify-end'}>
                      <UserModal />
                    </div>

                    <TableTemplate
                      tableBody={<UserTableBody items={userQuery.data?.content ?? []} />}
                      tableHeader={<UserTableHeader />}
                    />

                    <Pagination
                      handleChangePage={handleChangePage}
                      page={page}
                      totalPages={userQuery.data.totalPages}
                    />
                  </div>
                ) : null}
              </div>
            </TabPanel>
          </div>
        </TabContext>
      </div>
    </div>
  );
};
