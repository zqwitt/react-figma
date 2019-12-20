import * as React from 'react';
const renderer = require('react-test-renderer');
import { Text } from '../Text';
import { createFigma } from 'figma-api-stub';

describe('<Text />', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('Text without props', () => {
        const tree = renderer.create(<Text />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Text with fontFamily', () => {
        const tree = renderer.create(<Text style={{ fontFamily: 'Helvetica' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Text with fontFamily, fontWeight', () => {
        const tree = renderer.create(<Text style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Text with fontFamily, fontWeight, fontStyle', () => {
        const tree = renderer
            .create(<Text style={{ fontFamily: 'Helvetica', fontWeight: 'bold', fontStyle: 'italic' }} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
