import React from 'react';
import { render, screen } from '@testing-library/react';
import DiscountItem from '../components/Discounts/DiscountItem';

describe('DiscountItem Component', () => {
  const mockItem = {
    name: 'Mocked Product',
    image: 'https://via.placeholder.com/150',
    current_price: '20.00',
    offer_price: '15.00',
    normal_price: '25.00',
    percentage: 20,
  };

  test('renders DiscountItem component with correct data', () => {
    render(<DiscountItem {...mockItem} />);
    
    // Verify the texts in the page
    expect(screen.getByText('Mocked Product')).toBeInTheDocument();
    expect(screen.getByText('$25.00')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();
    expect(screen.getByText('$15.00')).toBeInTheDocument();
    expect(screen.getByText('-20%')).toBeInTheDocument();

    // Verify the image
    const imgElement = screen.getByAltText('Mocked Product');
    expect(imgElement).toHaveAttribute('src', mockItem.image);
  });
});