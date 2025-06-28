import MainErrorFallback from '@/components/errors/MainErrorFallback';
import FullScreenLoader from '@/components/ui/FullScreenLoader';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const AppProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <React.Suspense fallback={<FullScreenLoader />}>
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        {children}
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default AppProvider;
