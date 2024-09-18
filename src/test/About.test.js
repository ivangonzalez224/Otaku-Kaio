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

  it('renders the Our Story section with the heading and text', () => {
    expect(screen.getByText('Our Story')).toBeInTheDocument();
    expect(screen.getByText(/Otaku Kaio was founded in 2023/i)).toBeInTheDocument();
    expect(screen.getByAltText('Our Story')).toBeInTheDocument();
  });

  it('renders the Our Products section with the product categories', () => {
    expect(screen.getByText('What We Offer')).toBeInTheDocument();
    expect(screen.getByText('Clothes')).toBeInTheDocument();
    expect(screen.getByAltText('Clothes')).toBeInTheDocument();
    expect(screen.getByText('Mugs')).toBeInTheDocument();
    expect(screen.getByAltText('Mugs')).toBeInTheDocument();
    expect(screen.getByText('Mangas')).toBeInTheDocument();
    expect(screen.getByAltText('Mangas')).toBeInTheDocument();
    expect(screen.getByText('Dolls')).toBeInTheDocument();
    expect(screen.getByAltText('Dolls')).toBeInTheDocument();
    expect(screen.getByText('Games')).toBeInTheDocument();
    expect(screen.getByAltText('Games')).toBeInTheDocument();
  });

  it('renders the Community section with social media links', () => {
    expect(screen.getByText('Join Our Community')).toBeInTheDocument();
    const facebookLink = screen.getByRole('link', { name: /facebook/i, hidden: true });
	expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
    expect(screen.getByRole('link', { name: /twitter/i })).toHaveAttribute('href', 'https://twitter.com');
    expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute('href', 'https://instagram.com');
  });

  it('renders the Contact Us section with contact details', () => {
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByText(/support@otakukaio.com/i)).toHaveAttribute('href', 'mailto:support@otakukaio.com');
    expect(screen.getByText('+1 (234) 567-890')).toHaveAttribute('href', 'tel:+51906590278');
  });

  it('renders the Customer Testimonials section with customer reviews', () => {
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument();
    expect(screen.getByText(/I love the variety of products/i)).toBeInTheDocument();
    expect(screen.getByText('- Alex, Tokyo')).toBeInTheDocument();
    expect(screen.getByText(/Otaku Kaio is my go-to store/i)).toBeInTheDocument();
    expect(screen.getByText('- Maria, New York')).toBeInTheDocument();
  });
});  