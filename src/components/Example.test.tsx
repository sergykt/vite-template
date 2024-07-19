import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Example from './Example';

describe('Example', () => {
  test('Example', async () => {
    render(<Example />);
    const ExampleEl = await screen.findByTestId('example');
    expect(ExampleEl).toHaveTextContent(/Example/);
    expect(ExampleEl).toHaveStyle({ color: 'rgb(255, 0, 0)' });
  });
});
