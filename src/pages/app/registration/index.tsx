import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { AppLayout } from '../../../components/AppLayout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const RegistrationPage: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const locale = router.locale;

  return (
    <AppLayout pageTitle={t('app-name')}>
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

export default RegistrationPage;
