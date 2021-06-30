import React from "react";
import CollapsComponent from "../CollapsComponent";
import { getByTestId, render } from '@testing-library/react';


let container = null;

describe('CollapsComponent form UI', () => {
    beforeEach(() => {
        container = render(<CollapsComponent />).container;
    });

    it('should render containermain', () => {
        expect(getByTestId(container, 'containermain')).toBeTruthy();
    });
    it('should render container-upper', () => {
        expect(getByTestId(container, 'container-upper')).toBeTruthy();
    });
    it('should render container-heading', () => {
        expect(getByTestId(container, 'container-heading')).toBeTruthy();
    });
    it('should render container-des', () => {
        expect(getByTestId(container, 'container-des')).toBeTruthy();
    });

    it('should render container-lower', () => {
        expect(getByTestId(container, 'container-lower')).toBeTruthy();
    });
    it('should render container-lower-header', () => {
        expect(getByTestId(container, 'container-lower-header')).toBeTruthy();
    });
    it('should render container-lower-des', () => {
        expect(getByTestId(container, 'container-lower-des')).toBeTruthy();
    });

});
