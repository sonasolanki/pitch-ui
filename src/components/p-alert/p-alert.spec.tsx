import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { PAlert } from './p-alert';

describe('p-alert', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [PAlert],
            template: () => <p-alert></p-alert>
        });
        expect(root).toEqualHtml(`
            <p-alert>

                    <div class="p-alert">
                        p-alert
                    </div>

            </p-alert>
        `)
    })
})
