import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography component="h1" variant="h4">
        {t('welcome')}
      </Typography>
      <Typography variant="subtitle1">{t('app.title')}</Typography>
      <Typography variant="subtitle1">{t('app.greeting')}</Typography>
    </div>
  );
};

export default HomePage;
