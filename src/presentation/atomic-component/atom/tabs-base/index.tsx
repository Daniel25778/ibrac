import { Tabs } from '@mui/material';
import { dimensions } from 'main/config';
import { useWindowDimensions } from 'data/hooks';
import type { FC, ReactNode, SyntheticEvent } from 'react';

interface TabsBaseProps {
  children: ReactNode;
  selectedValue: string;
  onChange: (_event: SyntheticEvent, newValue: string) => void;
}

export const TabsBase: FC<TabsBaseProps> = ({ selectedValue, onChange, children }) => {
  const { width } = useWindowDimensions();

  return (
    <Tabs
      centered
      className={'mb-3'}
      classes={{
        root: 'flex flex-col'
      }}
      onChange={onChange}
      scrollButtons={false}
      sx={{
        '.MuiTabs-indicator': {
          top: '0px'
        }
      }}
      value={selectedValue}
      variant={width > dimensions.tablet ? 'fullWidth' : 'scrollable'}
    >
      {children}
    </Tabs>
  );
};
