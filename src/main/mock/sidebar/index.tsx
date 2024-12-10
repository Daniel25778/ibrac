import {
  AttachMoney,
  Business,
  FolderCopy,
  FormatListBulleted,
  Group,
  Home,
  Info
} from '@mui/icons-material';
import { paths } from 'main/config';

export const SidebarItems = [
  {
    icon: <Business />,
    link: paths.home,
    name: 'Comercial'
  },
  {
    icon: <Home />,
    link: paths.home,
    name: 'Produção'
  },
  {
    icon: <AttachMoney />,
    link: paths.home,
    name: 'Financeiro'
  },
  {
    icon: <FormatListBulleted />,
    link: paths.home,
    name: 'Supply'
  },
  {
    icon: <Group />,
    link: paths.home,
    name: 'RH'
  },
  {
    icon: <FolderCopy />,
    link: paths.home,
    name: 'SGI'
  },
  {
    icon: <Home />,
    link: paths.home,
    name: 'SYSADMIN'
  },
  {
    icon: <Info />,
    link: paths.home,
    name: 'Sobre'
  }
];
