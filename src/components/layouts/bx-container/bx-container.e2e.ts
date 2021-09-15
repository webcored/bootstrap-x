import { newE2EPage } from '@stencil/core/testing';

describe('bx-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bx-container></bx-container>');

    const element = await page.find('bx-container');
    expect(element).toHaveClass('hydrated');
  });
});
