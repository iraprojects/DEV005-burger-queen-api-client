import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Buttons from '../src/Components/Button';

describe('Button', () => {
    test('should call onClick when button is clicked', () => {
        const onClickMock = jest.fn();

        const { getByText } = render(
            <Buttons onClick={onClickMock} text="Ingresar" />
        );
        const button = getByText('Ingresar');
        fireEvent.click(button);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

})