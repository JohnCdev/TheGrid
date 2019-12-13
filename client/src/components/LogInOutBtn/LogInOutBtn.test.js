import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import LogInOutBtn from './LogInOutBtn';

describe('log in out button', ()=> {
    it("should render without crashing as authenticated", ()=> {
        let mockClick = jest.fn()
        let wrapper = shallow(<LogInOutBtn authenticated={true} handleClick={mockClick}/>)

        let button = wrapper.find('#logout_button')
        expect(button.length).to.equal(1)

        button.simulate('click')
        expect(mockClick.mock.calls.length).to.equal(1)
    })
    it("should render without crashing as unauthenticated", ()=> {
        let mockClick = jest.fn()
        let wrapper = shallow(<LogInOutBtn authenticated={false} handleClick={mockClick}/>)

        let button = wrapper.find('#login_button')
        expect(button.length).to.equal(1)

        button.simulate('click')
        expect(mockClick.mock.calls.length).to.equal(1)
    })
})