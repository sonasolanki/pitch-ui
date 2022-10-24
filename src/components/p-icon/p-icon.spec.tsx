import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { PIcon } from './p-icon';

describe('p-icon', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [PIcon],
            template: () => <p-icon></p-icon>
        });
        expect(root).toEqualHtml(`
            <p-icon>

                    <div class="p-icon">
                        p-icon
                    </div>

            </p-icon>
        `)
    })
})
