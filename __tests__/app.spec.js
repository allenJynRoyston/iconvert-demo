import { shallowMount } from '@vue/test-utils'
import Component from '../src/App.vue';

describe('App Mount', () => {
    const wrapper = shallowMount(Component, {
        stubs: ['router-link', 'router-view']
    })

    it('is instantiated', () => {
        expect(wrapper.vm).toBeTruthy();
    });
})