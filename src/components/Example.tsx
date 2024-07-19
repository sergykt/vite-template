import { type FC } from 'react';
import styled from 'styled-components';
import styles from './Example.module.scss';

const Button = styled.button`
  color: red;
`;

const Example: FC = () => (
  <div className={styles.box}>
    <Button className='button' data-testid='example'>
      Example
    </Button>
  </div>
);

export default Example;
