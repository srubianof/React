import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GifGridItem from './GifGridItem';

describe('<GifGridItem />', () => {
  test('it should mount', () => {
    render(<GifGridItem />);
    
    const gifGridItem = screen.getByTestId('GifGridItem');

    expect(gifGridItem).toBeInTheDocument();
  });
});