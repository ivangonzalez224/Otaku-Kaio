import React from 'react';
import { render, screen } from '@testing-library/react';
import Offers from '../components/pages/Offers';
import DiscountList from '../components/Discounts/DiscountList';
import FooterLogic from '../components/Footer/FooterLogic';

jest.mock('../components/Discounts/DiscountList', () => () => <div>Mocked DiscountList</div>);
jest.mock('../components/Footer/FooterLogic', () => () => <div>Mocked FooterLogic</div>);

describe('Offers Component', () => {
  test('renders Offers component with DiscountList and FooterLogic', () => {
    render(<Offers />);
    
    // Verify if child conponents render correctly
    expect(screen.getByText('Mocked DiscountList')).toBeInTheDocument();
    expect(screen.getByText('Mocked FooterLogic')).toBeInTheDocument();
  });
});