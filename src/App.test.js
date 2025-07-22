import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders URL Shortener title', () => {
  render(<App />);
  const titleElement = screen.getByText(/URL Shortener/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders input field', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter URL or Email/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders shorten button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Shorten/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders result div', () => {
  render(<App />);
  const resultElement = screen.getByTestId('result');
  expect(resultElement).toBeInTheDocument();
});

test('input field accepts text', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter URL or Email/i);
  inputElement.value = 'test input';
  expect(inputElement.value).toBe('test input');
});

test('shorten button is clickable', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Shorten/i);
  expect(buttonElement).toBeEnabled();
});
