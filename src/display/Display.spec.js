// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Display/>);
});

describe('Controls component', () => {

    test('is unlocked by default', () => {
       wrapper = rtl.render(<Display/>);
       expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
       expect(wrapper.queryByText(/closed/i)).not.toBeInTheDocument();
    })

   test('should be locked when locked is true', () => {
        const displayWhenLocked = rtl.render(<Display locked={true}/>);
        // expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
        expect(displayWhenLocked.getByText(/locked/i)).toBeInTheDocument();    
    })

    test('should be unlocked when locked is false', () => {
        const displayWhenUnlocked = rtl.render(<Display locked={false}/>);
        // expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
        expect(displayWhenUnlocked.queryByText(/unlocked/i)).toBeInTheDocument();    
    })

    test('displays open if closed is true', () => {
        const displayOpen = rtl.render(<Display closed={true}/>);
        expect(displayOpen.getByText(/closed/i))    
    })
})

