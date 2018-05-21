import * as React from 'react';
import Home from '../Home/Home';
import { shallow } from 'enzyme';

describe('<Home />', () => {
    beforeEach(() => {
        global.sessionStorage = {
            getItem: jest.fn()
        };
        global.JSON.parse = jest.fn();
    });

    it('renders 1 <Home /> component', () =>{
        let sessionStorage = {
            getItem: true
        };

        let state = {
            redirect: false
        };
        const component = shallow(<Home />);
        expect(component).toHaveLength(1);
    });
});
