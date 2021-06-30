import React from "react";
import AddEvent from "../AddEvent";
import { getByTestId, render } from '@testing-library/react';
//import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

let container = null;

describe('Testing AddEvent form UI', () => {
    beforeEach(() => {
        container = render(<AddEvent />).container;
    });

    it('should render add-event-card', () => {
        expect(getByTestId(container, 'add-event-card')).toBeTruthy();
    });
    it('should render add-event-wrapper', () => {
        expect(getByTestId(container, 'add-event-wrapper')).toBeTruthy();
    });
    it('should render add-event-form', () => {
        expect(getByTestId(container, 'add-event-form')).toBeTruthy();
    });
    it('should render add-event-header', () => {
        expect(getByTestId(container, 'add-event-header')).toBeTruthy();
        expect(getByTestId(container, 'add-event-header').textContent).toBe('Add Event');
    });

    it('should render radio-button-field', () => {
        expect(getByTestId(container, 'radio-button-field')).toBeTruthy();
    });

    it('should render event-name-field-div', () => {
        expect(getByTestId(container, 'event-name-field')).toBeTruthy();
    });
    it('should render event-name-field', () => {
        expect(getByTestId(container, 'event-name-field')).toBeTruthy();
    });
    it('should render event-name-field-label', () => {
        expect(getByTestId(container, 'event-name-field-label')).toBeTruthy();
        expect(getByTestId(container, 'event-name-field-label').textContent).toBe('Event Name');
    });

    it('should render organizer-name-field-div', () => {
        expect(getByTestId(container, 'organizer-name-field')).toBeTruthy();
    });
    it('should render organizer-name-field', () => {
        expect(getByTestId(container, 'organizer-name-field')).toBeTruthy();
    });
    it('should render organizer-name-field-label', () => {
        expect(getByTestId(container, 'organizer-name-field-label')).toBeTruthy();
        expect(getByTestId(container, 'organizer-name-field-label').textContent).toBe('Organizer Name');
    });

    it('should render mainspeaker-name-field-div', () => {
        expect(getByTestId(container, 'mainspeaker-name-field')).toBeTruthy();
    });
    it('should render mainspeaker-name-field', () => {
        expect(getByTestId(container, 'mainspeaker-name-field')).toBeTruthy();
    });
    it('should render mainspeaker-name-field-label', () => {
        expect(getByTestId(container, 'mainspeaker-name-field-label')).toBeTruthy();
        expect(getByTestId(container, 'mainspeaker-name-field-label').textContent).toBe('Main Speaker Name');
    });

    it('should render place-link-field-div', () => {
        expect(getByTestId(container, 'place-link-field')).toBeTruthy();
    });
    it('should render place-link-field', () => {
        expect(getByTestId(container, 'place-link-field')).toBeTruthy();
    });
    it('should render place-link-field-label', () => {
        expect(getByTestId(container, 'place-link-field-label')).toBeTruthy();
        expect(getByTestId(container, 'place-link-field-label').textContent).toBe('Place or Link');
    });

    it('should render description-field-div', () => {
        expect(getByTestId(container, 'description-field')).toBeTruthy();
    });
    it('should render description-field', () => {
        expect(getByTestId(container, 'description-field')).toBeTruthy();
    });
    it('should render description-field-label', () => {
        expect(getByTestId(container, 'description-field-label')).toBeTruthy();
        expect(getByTestId(container, 'description-field-label').textContent).toBe('Description');
    });

    it('should render sponsor-field-div', () => {
        expect(getByTestId(container, 'sponsor-field-div')).toBeTruthy();
    });
    it('should render sponsor-field', () => {
        expect(getByTestId(container, 'sponsor-field')).toBeTruthy();
    });
    it('should render sponsor-field-label', () => {
        expect(getByTestId(container, 'sponsor-field-label')).toBeTruthy();
        expect(getByTestId(container, 'sponsor-field-label').textContent).toBe('Sponsor');
    });

    it('should render noOfPeople-field-div', () => {
        expect(getByTestId(container, 'noOfPeople-field')).toBeTruthy();
    });
    it('should render noOfPeople-field', () => {
        expect(getByTestId(container, 'noOfPeople-field')).toBeTruthy();
    });
    it('should render noOfPeople-field-label', () => {
        expect(getByTestId(container, 'noOfPeople-field-label')).toBeTruthy();
        expect(getByTestId(container, 'noOfPeople-field-label').textContent).toBe('Limit of people');
    });

    it('should render add-event-submit-btn', () => {
        expect(getByTestId(container, 'add-event-submit-btn')).toBeTruthy();
    });
});
