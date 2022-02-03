import { Typography } from '@mui/material';
import image from '../Images/home.png';

export default function HomeView() {
  return (
    <>
      <Typography
        variant="h2"
        component="h1"
        mt={3}
        textAlign="center"
        sx={{
          color: 'primary.main',
        }}
      >
        Welcome to your private phonebook!
      </Typography>
      <img src={image} alt="homeImage" style={{ marginTop: '10px' }} />
    </>
  );
}
