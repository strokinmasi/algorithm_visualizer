import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import Gridbase from '../../src/grid/gridbase';

describe('group', () => {
    it('should render the correct graph size when graph size changes', () => {
        render(<Gridbase/>);

        expect(screen.getByText('10x10')).toBeInTheDocument();

        const rowInput = screen.getByPlaceholderText('Enter number of rows');
        fireEvent.change(rowInput, { target: { value: '5' } });
        fireEvent.click(screen.getByText('Set Row Length'));

        const colInput = screen.getByPlaceholderText('Enter number of rows');
        fireEvent.change(colInput, { target: { value: '8' } });
        fireEvent.click(screen.getByText('Set Column Length'));

        expect(screen.getByText('5x8')).toBeInTheDocument();
    })
})