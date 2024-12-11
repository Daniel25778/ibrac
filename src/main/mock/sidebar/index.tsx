import {
  AdminPanelSettings,
  AttachMoney,
  Business,
  FolderCopy,
  FormatListBulleted,
  Group,
  Home,
  Info,
  Inventory2
} from '@mui/icons-material';
import { paths } from 'main/config';

export const SidebarItems = [
  {
    icon: <Home />,
    keyword: 'home',
    link: paths.home,
    name: 'Home'
  },
  {
    icon: <Business />,
    keyword: 'comercial',
    link: paths.comercial,
    name: 'Comercial'
  },
  {
    icon: <Inventory2 />,
    keyword: 'producao',
    link: paths.production,
    name: 'Produção'
  },
  {
    icon: <AttachMoney />,
    keyword: 'financeiro',
    link: paths.financial,
    name: 'Financeiro'
  },
  {
    icon: <FormatListBulleted />,
    keyword: 'supply',
    link: paths.supply,
    name: 'Supply'
  },
  {
    icon: <Group />,
    keyword: 'rh',
    link: paths.rh,
    name: 'RH'
  },
  {
    icon: <FolderCopy />,
    keyword: 'sgi',
    link: paths.sgi,
    name: 'SGI'
  },
  {
    icon: <AdminPanelSettings />,
    keyword: 'sys-admin',
    link: paths.sysAdmin,
    name: 'SYSADMIN'
  },
  {
    icon: <Info />,
    keyword: 'sobre',
    link: paths.about,
    name: 'Sobre'
  }
];
