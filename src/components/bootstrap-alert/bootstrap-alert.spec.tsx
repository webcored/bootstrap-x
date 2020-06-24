import { newSpecPage } from '@stencil/core/testing';
import { BootstrapAlert } from './bootstrap-alert';

describe('bootstrap-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BootstrapAlert],
      html: `<bootstrap-alert></bootstrap-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <bootstrap-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bootstrap-alert>
    `);
  });
});
