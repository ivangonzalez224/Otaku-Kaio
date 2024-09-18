import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import CategoryLogic from '../components/Categories/CategoryLogic';

const mockStore = configureStore([]);

describe('CategoryLogic Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      landings: {
        landingItems: [
          { id: 1, category: 'cat', image: 'cat1.jpg', name: 'category1', offer: 10 },
          { id: 2, category: 'cat', image: 'cat2.jpg', name: 'category2', offer: 20 }
        ]
      }
    });
  });

  it('should render category items', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CategoryLogic />
        </MemoryRouter>  
      </Provider>
    );

    expect(screen.getByText('category1')).toBeInTheDocument();
    expect(screen.getByText('category2')).toBeInTheDocument();
  });
});