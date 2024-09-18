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
});