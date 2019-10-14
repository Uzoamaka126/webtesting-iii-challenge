// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Display locked={false} closed={false}/>);
});

describe('Controls component', () => {

    test('is unlocked by default', () => {
        wrapper = rtl.render(<Display closed={false} locked={false}/>);
       expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
       expect(wrapper.queryByText(/closed/i)).not.toBeInTheDocument();
    })

   test('should be locked when closed is true', () => {
        wrapper = rtl.render(<Display closed={true} locked={true}/>);
        // expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/open/i)).toBeVisible();
    })

    test('displays open if closed is true', () => {
        wrapper = rtl.render(<Display closed={true}/>);
       expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    })
})

// it('can increment the count by one by clicking increment', () => {
//     const incButton = tools.queryByTestId('incButton');

//     rtl.fireEvent.click(incButton);
//     expect(tools.queryByText(/0/)).not.toBeInTheDocument();
//     expect(tools.queryByText(/1/)).toBeInTheDocument();

//     rtl.fireEvent.click(incButton);
//     expect(tools.queryByText(/1/)).not.toBeInTheDocument();
//     expect(tools.queryByText(/2/)).toBeInTheDocument();
//   });
