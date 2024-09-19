import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import DiscountList from '../components/Discounts/DiscountList';

const mockStore = configureStore([]);
const mockDiscountItems = [
  { name: 'Product 1', category: 'Clothes', current_price: '20.00', offer_price: '15.00', normal_price: '25.00', percentage: 20, image: 'https://via.placeholder.com/150' },
  { name: 'Product 2', category: 'Mangas', current_price: '10.00', offer_price: '8.00', normal_price: '12.00', percentage: 15, image: 'https://via.placeholder.com/150' },
];

jest.mock('../components/Discounts/DiscountItem', () => ({ name }) => <div>{name}</div>);

describe('DiscountList Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      discounts: { discountItems: mockDiscountItems },
    });
  });

  test('renders DiscountList with categories and discounts', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <DiscountList />
        </MemoryRouter>
      </Provider>
    );

    // Verify categories in the page
    expect(screen.getByText('Clothes Offers')).toBeInTheDocument();
    expect(screen.getByText('Mangas Offers')).toBeInTheDocument();

    // Verify products in the categories
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });
});  