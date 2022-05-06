import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import Header from '../index';

import '@testing-library/jest-dom/extend-expect';

test('header renders with correct text', () => {
  render(
    <RecoilRoot>
      <Header />
    </RecoilRoot>,
  );
  // screen.getByRole('');

  const headerEl = screen.getByRole('heading', {
    name: /My App/i,
  });

  expect(headerEl).toBeInTheDocument();
});
