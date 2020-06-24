import { newE2EPage } from '@stencil/core/testing';

describe('bx-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bx-badge></bx-badge>');

    const element = await page.find('bx-badge');
    expect(element).toHaveClass('hydrated');
  });
});
