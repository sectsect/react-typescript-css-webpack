import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Header from '@/components/Header/Header';

import '@testing-library/jest-dom/extend-expect';

test('header renders with correct text', () => {
  render(
    <RecoilRoot>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </RecoilRoot>,
  );
  // screen.getByRole('');

  const headerEl = screen.getByRole('heading', {
    name: /My App/i,
  });

  expect(headerEl).toBeInTheDocument();
});
