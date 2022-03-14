import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { AppLayout } from '../../../components/AppLayout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getProviders, signIn } from 'next-auth/react';
import { Provider } from 'next-auth/providers';

interface ISignInPageProps {
  providers: Provider;
}

const SignInPage: NextPage<ISignInPageProps> = ({ providers }) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const locale = router.locale;

  return (
    <AppLayout pageTitle={t('app-name')}>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  const providers = await getProviders();
  return {
    props: {
      providers,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

export default SignInPage;
