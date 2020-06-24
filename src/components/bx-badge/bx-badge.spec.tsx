import { newSpecPage } from '@stencil/core/testing';
import { BxBadge } from './bx-badge';

describe('bx-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BxBadge],
      html: `<bx-badge></bx-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <bx-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bx-badge>
    `);
  });
});
