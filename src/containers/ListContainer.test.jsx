/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import ListContainer from './ListContainer';
import mockData from  '../../fixtures/mock-data.json';


const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(ctx.json(mockData));
    })
);

describe('ListContainer', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    
    it('renders a loading element', async () => {
        render(<ListContainer/>);
        screen.getByText('LOADING...');
    });

    it('renders a list of characters from Hey Arnold', async ()=> {
        render(<ListContainer/>);
        const ul = await screen.findByRole('list', {name: 'character-list'});
        return waitFor(()=> {
        expect(ul).toMatchSnapshot();
        });
    });
});
