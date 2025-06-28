import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const MainErrorFallback = () => {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Typography component="h1" variant="h3">
        Ooops, something went wrong :(
      </Typography>
      <Button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </Stack>
  );
};

export default MainErrorFallback;
