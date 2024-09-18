import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import OfferLogic from '../components/Offer/OfferLogic';

const mockStore = configureStore([]);

describe('OfferLogic Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      landings: {
        landingItems: [
          { id: 1, category: 'offer', image: 'offer1.jpg', title: 'offer1', offer: 50 },
          { id: 2, category: 'offer', image: 'offer2.jpg', title: 'offer2', offer: 30 }
        ]
      }
    });
  });

  it('should render offer items', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <OfferLogic />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('offer1')).toBeInTheDocument();
    expect(screen.getByText('offer2')).toBeInTheDocument();
  });
});