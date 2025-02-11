import { Role, type UserProps } from 'domain/models';
import { decryptData } from 'main/utils';
import { store, useAppSelector } from 'store';

export const getUser = (): UserProps => {
  const user = decryptData(store.getState().persist.user || '');

  if (user) return JSON.parse(user) as UserProps;

  return {
    _count: { actions: 0 },
    avatar: null,
    email: '',
    id: 0,
    role: Role.common,
    userSeeFunctionality: []
  };
};

export const useSidebar = (): boolean => {
  const sidebar = useAppSelector((state) => state.persist.sidebar);

  return sidebar;
};
