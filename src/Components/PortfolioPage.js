import React from 'react';
import { Typography, Container } from '@mui/material';

function PortfolioPage() {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Portfolio
      </Typography>
      <Typography>
        Here are some of my projects.
      </Typography>
    </Container>
  );
}

export default PortfolioPage;
