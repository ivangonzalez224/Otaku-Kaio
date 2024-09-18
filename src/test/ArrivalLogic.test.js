import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import ArrivalLogic from '../components/Arrivals/ArrivalsLogic';

const mockStore = configureStore([]);

describe('ArrivalLogic Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      landings: {
        landingItems: [
          { id: 1, category: 'arrival', image: 'arrival1.jpg', name: 'arrival1', sub: 'sub1' },
          { id: 2, category: 'arrival', image: 'arrival2.jpg', name: 'arrival2', sub: 'sub2' }
        ]
      }
    });
  });

  it('should render arrival items', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ArrivalLogic />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('arrival1')).toBeInTheDocument();
    expect(screen.getByText('arrival2')).toBeInTheDocument();
  });
});