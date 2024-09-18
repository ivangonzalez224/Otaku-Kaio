import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/pages/About';
import FooterLogic from '../components/Footer/FooterLogic';

// Mock the Footer
jest.mock('../components/Footer/FooterLogic', () => () => <div>Footer</div>);

describe('About Page', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('renders the header section with the title and subtitle', () => {
    expect(screen.getByText('Otaku Kaio')).toBeInTheDocument();
    expect(screen.getByText('Your One-Stop Shop for All Things Otaku!')).toBeInTheDocument();
  });
});  