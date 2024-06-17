import { type FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import ExamplePage from '@/pages/ExamplePage';

const App: FC = () => (
  <Routes>
    <Route path='/' element={<ExamplePage />} />
  </Routes>
);

export default App;
