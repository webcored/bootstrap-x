import { newSpecPage } from '@stencil/core/testing';
import { BxContainer } from './bx-container';

describe('bx-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BxContainer],
      html: `<bx-container></bx-container>`,
    });
    expect(page.root).toEqualHtml(`
      <bx-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bx-container>
    `);
  });
});
