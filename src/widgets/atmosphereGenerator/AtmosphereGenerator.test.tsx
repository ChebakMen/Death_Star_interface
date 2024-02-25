import { render } from '@testing-library/react';
import AtmosphereGenerator from './AtmosphereGenerator';

test('renders components correctly', () => {
    const { getByText, getByTestId } = render(<AtmosphereGenerator />);
    const sectionTitle = getByText('Генератор атмосферы');
    const stateElements = getByText('StateElement');
    const models = getByTestId('models');
    
    expect(sectionTitle).toBeInTheDocument();
    expect(stateElements).toBeInTheDocument();
    expect(models).toBeInTheDocument();
  });