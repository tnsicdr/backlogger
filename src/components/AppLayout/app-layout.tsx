import { PropsWithChildren } from 'react';
import { AppBar } from '../AppBar';

interface IAppLayoutProps {
  pageTitle: string;
}

export const AppLayout = (props: PropsWithChildren<IAppLayoutProps>) => {
  const { pageTitle, children } = props;

  return (
    <>
      <AppBar title={pageTitle} />
      <main>{children}</main>
    </>
  );
};
