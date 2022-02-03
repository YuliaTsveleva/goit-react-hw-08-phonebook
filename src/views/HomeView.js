import { Typography, Stack } from '@mui/material';

export default function HomeView() {
  return (
    <div>
      <Stack>
        <Typography
          variant="h2"
          component="h1"
          mt={3}
          textAlign="center"
          sx={{
            color: 'rgb(9, 108, 255)',
          }}
        >
          Welcome to your private phonebook!
        </Typography>
        {/* <img src={image} alt="homeImage" style={{ marginTop: '90px' }} /> */}
      </Stack>
    </div>
  );
}
