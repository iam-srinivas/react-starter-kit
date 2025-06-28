import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {JSON.stringify(i18n.languages)}
      <h1>{t('welcome')}</h1>
      <p>{t('app.title')}</p>
      <p>{t('app.greeting')}</p>
    </div>
  );
};

export default HomePage;
