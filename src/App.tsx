import { type FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import ExamplePage from '@pages/ExamplePage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<ExamplePage />} />
    </Routes>
  );
};

export default App;
