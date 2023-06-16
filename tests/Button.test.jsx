import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Buttons from '../src/Components/Button';

describe('Button', () => {
    test('should call onClick when button is clicked', () => {
        // Mock the onClick function
        const onClickMock = jest.fn();

        // Render the component
        const { getByText } = render(
            <Buttons onClick={onClickMock} text="Ingresar" />
        );

        // Find the button element and simulate a click event
        const button = getByText('Ingresar');
        fireEvent.click(button);

        // Assert that onClick has been called
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

})



// npx jest tests