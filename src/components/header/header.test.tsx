import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';

const defaultTitle = 'jinyoung';

test('renders home page name as title by default', () => {
  render(<Header />);
  screen.debug();
  expect(screen.getByText(defaultTitle)).toBeInTheDocument();
});

test('renders blog page name with preceding slash', () => {
  const title = 'Thoughts';
  const renderedTitle = '/ thoughts';
  render(<Header title={title} />);
  expect(screen.getByText(defaultTitle)).toBeInTheDocument();
  expect(screen.getByText(renderedTitle)).toBeInTheDocument();
});
