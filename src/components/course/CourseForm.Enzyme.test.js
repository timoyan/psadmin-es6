import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import CourseForm from './CourseForm';

function setup(props) {
    let _props = {
        course: {}, saving: false, errors: {},
        onSave: () => { },
        onChange: () => { }
    };

    _props = Object.assign(_props, props);

    return shallow(<CourseForm {..._props} />);
}

describe('CourseForm via Enzyme', () => {
    it('renders form and h1', () => {
        const wrapper = setup({ saving: false });
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is labled "Save" when not saving', () => {
        const wrapper = setup({ saving: false });
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('save button is labled "Saving..." when saving', () => {
        const wrapper = setup({ saving: true });
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});

