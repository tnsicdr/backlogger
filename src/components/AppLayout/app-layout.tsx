import { PropsWithChildren } from 'react';
import { AppBar } from '../AppBar';

interface IAppLayoutProps {
  pageTitle: string;
}

export const AppLayout = (props: PropsWithChildren<IAppLayoutProps>) => {
  const { pageTitle, children } = props;

  return (
    <div className="min-h-screen bg-gray-50 leading-normal tracking-normal">
      <AppBar title={pageTitle} />
      <main className="relative flex flex-col justify-center overflow-hidden p-4">
        {children}
      </main>
    </div>
  );
};
