import { newSpecPage } from '@stencil/core/testing';
import { BxButton } from './bx-button';

describe('bx-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BxButton],
      html: `<bx-button></bx-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bx-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bx-button>
    `);
  });
});
