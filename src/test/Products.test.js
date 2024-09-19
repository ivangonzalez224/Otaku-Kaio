import React from 'react';
import { render, screen } from '@testing-library/react';
import Products from '../components/pages/Products';
import StoreLogic from '../components/Store/StoreLogic';
import FooterLogic from '../components/Footer/FooterLogic';

jest.mock('../components/Store/StoreLogic', () => () => <div>Mocked StoreLogic</div>);
jest.mock('../components/Footer/FooterLogic', () => () => <div>Mocked FooterLogic</div>);

describe('Products Component', () => {
  test('renders StoreLogic and FooterLogic components', () => {
    render(<Products />);
    expect(screen.getByText('Mocked StoreLogic')).toBeInTheDocument();
    expect(screen.getByText('Mocked FooterLogic')).toBeInTheDocument();
  });
});