import React from 'react';
import { render } from '@testing-library/react';
import Users from './Users';
import * as dataTest from './dataTest';

test('renders empty user list', () => {
  const { container } = render(<Users users={[]} />);
  expect(container).toMatchSnapshot();
});

test('renders user list', () => {
  const { getByText, container } = render(<Users users={dataTest.users} />);
  const linkElement = getByText(/Ralph Avalon/i);
  expect(linkElement).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
