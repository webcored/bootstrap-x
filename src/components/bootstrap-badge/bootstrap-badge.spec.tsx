import { newSpecPage } from '@stencil/core/testing';
import { BootstrapBadge } from './bootstrap-badge';

describe('bootstrap-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BootstrapBadge],
      html: `<bootstrap-badge></bootstrap-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <bootstrap-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bootstrap-badge>
    `);
  });
});
