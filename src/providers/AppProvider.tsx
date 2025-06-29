import MainErrorFallback from '@/components/errors/MainErrorFallback';
import FullScreenLoader from '@/components/ui/FullScreenLoader';
import appTheme from '@/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const AppProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ErrorBoundary>
    </Suspense>
  );
};

export default AppProvider;
