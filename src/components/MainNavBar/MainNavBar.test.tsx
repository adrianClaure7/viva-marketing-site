import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainNavBar from './MainNavBar';

describe('<MainNavBar />', () => {
  test('it should mount', () => {
    render(<MainNavBar />);
    
    const mainNavBar = screen.getByTestId('MainNavBar');

    expect(mainNavBar).toBeInTheDocument();
  });
});