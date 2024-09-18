import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CarouselLogic from '../components/Carousel/CarouselLogic';

// Mock react-multi-carousel
jest.mock('react-multi-carousel', () => {
  return ({ children }) => <div>{children}</div>;
});

const mockStore = configureStore([]);

describe('CarouselLogic Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      landings: {
        landingItems: [
          { id: 1, category: 'carousel', image: 'image1.jpg', name: 'item1' },
          { id: 2, category: 'carousel', image: 'image2.jpg', name: 'item2' }
        ]
      }
    });
  });

  it('should render carousel items', () => {
    render(
      <Provider store={store}>
        <CarouselLogic />
      </Provider>
    );

    expect(screen.getByAltText('item1')).toBeInTheDocument();
    expect(screen.getByAltText('item2')).toBeInTheDocument();
  });
});