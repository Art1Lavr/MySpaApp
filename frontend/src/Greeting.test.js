import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Greeting from './Greeting';
jest.mock('axios');

test('fetches and displays greeting', async () => {
  axios.get.mockResolvedValue({ data: { message: 'Hello from backend!' } });
  render(<Greeting />);
  fireEvent.click(screen.getByText(/Get Greeting from Backend/i));
  const message = await waitFor(() => screen.getByText('Hello from backend!'));
  expect(message).toBeInTheDocument();
});
