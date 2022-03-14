import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AppLayout } from '../components/AppLayout';

const Home: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const locale = router.locale;

  return (
    <AppLayout pageTitle={t('app-name')}>
      <Head>
        <title>Backlogger</title>
      </Head>
      <main>
        <div className="flex flex-col items-center justify-center rounded border border-gray-500 shadow-md bg-white p-4">
          <h1>Backlogger, coming soon</h1>
          <h2>A new way to manage your collections</h2>
        </div>
      </main>
    </AppLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};
