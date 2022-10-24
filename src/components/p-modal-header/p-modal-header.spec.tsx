import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { PModalHeader } from './p-modal-header';

describe('p-modal-header', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [PModalHeader],
            template: () => <p-modal-header></p-modal-header>
        });
        expect(root).toEqualHtml(`
            <p-modal-header>
                <div class="p-modal-header">
                    p-modal-header
                </div>
            </p-modal-header>
        `)
    })
})
