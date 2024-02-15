import React from 'react';
import { Typography, Container } from '@mui/material';

function AboutPage() {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        About Me
      </Typography>
      <Typography>
        This is a brief introduction about myself.
      </Typography>
    </Container>
  );
}

export default AboutPage;
