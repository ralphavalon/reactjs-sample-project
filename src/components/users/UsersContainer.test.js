import React from 'react';
import { render } from '@testing-library/react';
import users from '../../http';
import * as dataTest from './dataTest';
import UsersContainer from './UsersContainer';

jest.mock('../../http');

test('renders learn react link', async () => {
  users.loadUsers.mockResolvedValue({ data: dataTest.users });

  const { container } = render(<UsersContainer />);
  await Promise.resolve();

  expect(container).toMatchSnapshot();
});
