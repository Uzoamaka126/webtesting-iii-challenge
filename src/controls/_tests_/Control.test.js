import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from '../Controls';

afterEach(rtl.cleanup);

let wrapper, closedButton;

beforeEach(() => {
    wrapper = rtl.render(<Controls locked={false} closed={false}/>);
    closedButton = wrapper.queryByText(/Lock Gate/i);
});

describe('Controls component', () => {
    test('cannot be closed or opened if it is locked', () => {
        const component = rtl.render(<Controls locked={true} closed={true} />);
        expect(component.queryByText(/close gate/i)).toBe(null);
      
        const button = component.getByText(/open gate/i);
        expect(button.disabled).toBe(true);
    }); 

   test('is unlocked by default', () => {
        wrapper = rtl.render(<Controls closed={false} locked={false}/>);
       expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
       expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
   })

   test('should be locked when clicked', () => {
    wrapper = rtl.render(<Controls closed={true} locked={true}/>);
    expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));
    expect(wrapper.queryByText(/open gate/i)).toBeInTheDocument();
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
