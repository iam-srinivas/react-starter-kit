import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

const FullScreenLoader = () => {
  return (
    <Stack alignItems="center" justifyContent="center">
      <CircularProgress />
    </Stack>
  );
};

export default FullScreenLoader;
