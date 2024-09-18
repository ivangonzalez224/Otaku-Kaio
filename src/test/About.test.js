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

  it('renders the Introduction section with the heading and images', () => {
    expect(screen.getByText('Welcome to Otaku Kaio')).toBeInTheDocument();
    expect(screen.getByAltText('Otaku Culture')).toBeInTheDocument();
    expect(screen.getByAltText('Another Aspect of Otaku Culture')).toBeInTheDocument();
  });
});  