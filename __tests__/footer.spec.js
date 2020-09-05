import { mount } from '@vue/test-utils'
import Footer from '../src/components/Footer.vue';

describe('Footer Mount', () => {
  const wrapper = mount(Footer);

  it('is instantiated', () => {
    expect(wrapper.vm).toBeTruthy();
  });
})