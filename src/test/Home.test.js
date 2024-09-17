import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import Home from '../components/pages/Home';

describe('Home Component', () => {
  it('should render the main components correctly', () => {
    render(
	  <Provider store={store}>
	    <MemoryRouter>
          <Home />
        </MemoryRouter>
	  </Provider>
   	);
    
    // Verify if the main components exists
    expect(screen.getByText('Popular Categories')).toBeInTheDocument();
    expect(screen.getByText('Latest Arrivals')).toBeInTheDocument();
    expect(screen.getByText('Daily offer')).toBeInTheDocument();
  });
});