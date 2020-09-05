import { mount } from '@vue/test-utils'
import Header from '../src/components/Header.vue';

describe('Header Mount', () => {
  const wrapper = mount(Header);

  it('is instantiated', () => {
    expect(wrapper.vm).toBeTruthy();
  });
})