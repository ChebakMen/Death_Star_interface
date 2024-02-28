import React from 'react';
import { render } from '@testing-library/react';
import StateElement from './StateElement';

describe('StateElement', () => {
  test('renders title, value, and sign correctly', () => {
    const props = {
      title: 'Test Title',
      value: 100,
      sign: '%' 
    };

    const { getByText } = render(<StateElement type={1} {...props} />);

    const titleElement = getByText(props.title);
    const valueElement = getByText(`${props.value}${props.sign}`);

    expect(titleElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});