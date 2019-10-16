// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
 import Display from '../display/Display';

afterEach(rtl.cleanup);

let wrapper, closedButton, lockedButton;

beforeEach(() => {
    wrapper = rtl.render(<Dashboard />);
    closedButton = rtl.render(<Controls />);
    lockedButton = rtl.render(<Display />)
});

describe('<Dashboard /> components', () => {
    
    it('should show both the controls and display component', () => {
        const controls = rtl.render(<Controls />);
        const display = rtl.render(<Display />);

        expect(display).toBeInTheDocument();
        expect(controls).toBeInTheDocument();
    });
})