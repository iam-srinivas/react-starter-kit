import AppProvider from '@/providers/AppProvider';
import AppRouter from './router';

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
