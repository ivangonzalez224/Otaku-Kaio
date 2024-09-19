import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserProfile from '../components/pages/UserProfile';
import FooterLogic from '../components/Footer/FooterLogic';

const mockStore = configureStore([]);

jest.mock('../components/Footer/FooterLogic', () => () => <div>Mocked Footer</div>);

describe('UserProfile Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: {
        userInfo: {
          data: {
            name: 'John Doe',
            email: 'johndoe@example.com',
          },
        },
      },
    });
  });

  test('renders user profile with name and email', () => {
    render(
      <Provider store={store}>
        <UserProfile />
      </Provider>
    );

    // Verify the name and email renders correctly
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();

    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('johndoe@example.com')).toBeInTheDocument();

    // Verify the default image renders correctly
    const profileImage = screen.getByAltText('Profile');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage.src).toContain('test-file-stub'); // Verify the image source

    // Verify the footer renders correctly
    expect(screen.getByText('Mocked Footer')).toBeInTheDocument();
  });

  test('renders loading message when user data is not available', () => {
    // Create a state without user information
    store = mockStore({
      user: {
        userInfo: {
          data: null,
        },
      },
    });

    render(
      <Provider store={store}>
        <UserProfile />
      </Provider>
    );

    // Verify if the message "Loading..." shows when there is no user
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});