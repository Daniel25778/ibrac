import { Link, type To } from 'react-router-dom';
import type { FC, ReactNode } from 'react';

interface GenericCardProps {
  title: ReactNode | string;
  description: ReactNode | string;
  startElement?: ReactNode | string;
  endElement?: ReactNode | string;
  link?: To;
  onClick?: () => void;
}

export const GenericCard: FC<GenericCardProps> = ({
  title,
  description,
  link,
  onClick,
  endElement,
  startElement
}) => {
  const className =
    'flex items-center w-full gap-2 shadow-[0px_0px_6px_1px_rgba(0,0,0,0.2)] rounded-2xl p-11  tablet:px-8 cursor-pointer hover:bg-[#f7f7f7]';

  const getElement = (): ReactNode => {
    return (
      <>
        <div className={'flex flex-col items-center text-center gap-2 w-full'}>
          {startElement}
          <p className={'text-primary font-medium text-lg'}>{title}</p>
          <p className={'text-blue-semiDark font-light text-base line-clamp-3'}>{description}</p>
        </div>

        {endElement}
      </>
    );
  };

  if (link)
    return (
      <Link className={className} onClick={onClick} to={link}>
        {getElement()}
      </Link>
    );

  return (
    <div className={className} onClick={onClick}>
      {getElement()}
    </div>
  );
};
