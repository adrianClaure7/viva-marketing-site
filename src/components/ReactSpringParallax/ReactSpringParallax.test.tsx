import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactSpringParallax from './ReactSpringParallax';

describe('<ReactSpringParallax />', () => {
  test('it should mount', () => {
    render(<ReactSpringParallax />);
    
    const reactSpringParallax = screen.getByTestId('ReactSpringParallax');

    expect(reactSpringParallax).toBeInTheDocument();
  });
});