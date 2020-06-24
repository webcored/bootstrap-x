import { newE2EPage } from '@stencil/core/testing';

describe('bootstrap-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bootstrap-alert></bootstrap-alert>');

    const element = await page.find('bootstrap-alert');
    expect(element).toHaveClass('hydrated');
  });
});
