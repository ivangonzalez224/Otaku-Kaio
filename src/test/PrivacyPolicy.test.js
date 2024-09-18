import React from 'react';
import { render, screen } from '@testing-library/react';
import PrivacyPolicy from '../components/pages/PrivacyPolicy';
jest.mock('../components//Footer/FooterLogic', () => () => <div data-testid="footer-logic-mock" />);

describe('PrivacyPolicy Component', () => {

  test('renders PrivacyPolicy component', () => {
    render(<PrivacyPolicy />);
    const titleElement = screen.getByText(/Privacy Policy/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the main title correctly', () => {
    render(<PrivacyPolicy />);
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement).toHaveTextContent('Privacy Policy');
  });

  test('renders image with correct src and alt text', () => {
    render(<PrivacyPolicy />);
    const imageElement = screen.getByAltText('Privacy P.');
    expect(imageElement).toHaveAttribute('src', 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1717606385/devSources/privacyPolicyTop_sc5vvf.png');
  });

  test('renders all the key sections', () => {
    render(<PrivacyPolicy />);
    
    expect(screen.getByText(/PERSONAL INFORMATION WE COLLECT/i)).toBeInTheDocument();
    expect(screen.getByText(/HOW DO WE USE YOUR PERSONAL INFORMATION/i)).toBeInTheDocument();
    expect(screen.getByText(/SHARING YOUR PERSONAL INFORMATION/i)).toBeInTheDocument();
    expect(screen.getByText(/YOUR RIGHTS/i)).toBeInTheDocument();
    expect(screen.getByText(/DATA RETENTION/i)).toBeInTheDocument();
    expect(screen.getByText(/MINORS/i)).toBeInTheDocument();
    expect(screen.getByText(/CHANGES/i)).toBeInTheDocument();
    expect(screen.getByText(/CONTACT US/i)).toBeInTheDocument();
  });
});