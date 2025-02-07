import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

export default function Hero() {
  return (
    <Box className="bg-gray-100">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid size={{ md: 4 }}>
            <p className="text-gray-900 text-center md:text-left text-3xl flex flex-col justify-center items-center md:items-start h-full py-7">
              <span className="font-medium text-lg text-gray-600 mb-5 uppercase">
                Blog
              </span>
              Self learning about software engineering
            </p>
          </Grid>
          <Grid size={{ md: 8 }}>
            <img
              className="mt-0 md:mt-7 rounded-2xl -mb-16"
              src="https://plus.unsplash.com/premium_photo-1738528459492-3acf8e5004c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
