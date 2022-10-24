import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FButton } from './p-button';

describe('p-button', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FButton],
            template: () => <p-button></p-button>
        });
        expect(root).toEqualHtml(`
            <p-button>

                    <div class="p-button">
                        p-button
                    </div>

            </p-button>
        `)
    })
})
