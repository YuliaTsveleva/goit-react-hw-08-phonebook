import Typography from '@mui/material/Typography';

export default function HomeView() {
  return (
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
  );
}
