import { newE2EPage } from '@stencil/core/testing';

describe('bx-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bx-dropdown></bx-dropdown>');

    const element = await page.find('bx-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
