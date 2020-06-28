import { newE2EPage } from '@stencil/core/testing';

describe('bx-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bx-breadcrumb></bx-breadcrumb>');

    const element = await page.find('bx-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
