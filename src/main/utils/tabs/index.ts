/* eslint-disable flowtype/space-after-type-colon */
import { colors } from 'presentation/style';
import type { SxProps } from '@mui/material';

export const sxTab = (selected: boolean): SxProps => ({
  borderBottom: selected ? '' : `2px solid ${colors.gray[300]}`,
  borderLeft: selected ? `2px solid ${colors.gray[300]}` : '',
  borderRight: selected ? `2px solid ${colors.gray[300]}` : ''
});

export const classNameTab = (
  selected: boolean
):
  | 'flex flex-col gap-2 items-center text-gray-400 capitalize text-lg '
  | 'flex flex-col gap-2 items-center text-gray-400 capitalize text-lg text-primary' =>
  `flex flex-col gap-2 items-center text-gray-400 capitalize text-lg ${selected ? 'text-primary' : ''}`;
