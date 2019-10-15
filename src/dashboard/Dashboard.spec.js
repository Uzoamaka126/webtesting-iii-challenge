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
});

describe('<Dashboard /> component spec', () => {
    
    it('<Controls /> component', () => {
        const controls = rtl.render(<Controls />);
        expect(controls).toBeInTheDocument();
    });

    it('<Display /> component', () => {
        const display = rtl.render(<Display />);
        expect(display).toBeInTheDocument();
    });
})