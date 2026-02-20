// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BribeMarket title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BribeMarket/i);
    expect(titleElement).toBeInTheDocument();
});
