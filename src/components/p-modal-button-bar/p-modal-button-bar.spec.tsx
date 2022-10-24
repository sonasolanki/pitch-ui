import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { PModalButtonBar } from './p-modal-button-bar';

describe('p-modal-button-bar', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [PModalButtonBar],
            template: () => <p-modal-button-bar></p-modal-button-bar>
        });
        expect(root).toEqualHtml(`
            <p-modal-button-bar>
                <div class="p-modal-button-bar">
                    p-modal-button-bar
                </div>
            </p-modal-button-bar>
        `)
    })
})
