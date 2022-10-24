import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { PModal } from './p-modal';

describe('p-modal', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [PModal],
            template: () => <p-modal></p-modal>
        });
        expect(root).toEqualHtml(`
            <p-modal>
                <div class="p-modal">
                    p-modal
                </div>
            </p-modal>
        `)
    })
})
