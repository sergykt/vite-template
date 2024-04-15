import { type FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './Example.module.scss';

const Example: FC = () => (
  <Box className={styles.example}>
    <Typography variant='h1'>Example</Typography>
  </Box>
);

export default Example;
