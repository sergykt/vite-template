import { type FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Example: FC = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 1200, display: 'flex', justifyContent: 'center' }}>
      <Typography variant='h1'>Example</Typography>
    </Box>
  );
};

export default Example;
