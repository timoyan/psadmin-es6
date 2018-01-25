import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(props) {
    let _props = {
        course: {}, saving: false, errors: {},
        onSave: () => { },
        onChange: () => { }
    };

    _props = Object.assign(_props, props);

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {..._props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe('CourseForm via React Test Utils', () => {
    it('renders form and h1', () => {
        const { output } = setup();
        expect(output.type).toBe('form');
        let [h1] = output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('save button is labled "Save" when not saving', () => {
        const { output } = setup({ saving: false });
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Save');
    });

    it('save button is labled "Saving..." when saving', () => {
        const { output } = setup({ saving: true });
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Saving...');
    });
});