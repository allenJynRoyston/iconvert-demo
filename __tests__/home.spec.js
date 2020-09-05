import Vuex from "vuex"
import { mount, createLocalVue } from "@vue/test-utils"
import ComponentWithVuex from '../src/routes/Home.vue';
import store from '../src/store/store'
import 'regenerator-runtime/runtime' // allows for async/await 

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Home Mount', () => {
  const wrapper = mount(ComponentWithVuex, {
    store, 
    localVue 
  })

  it('vuex/store is instantiated', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('... mounts props with defaults', () => {        
    expect(wrapper.vm.campaigns.length).toBe(0);
  })    

  it('...onClick function works correctly and sets renderHTML to html', () => {    
    wrapper.vm.onClick('<h1>test</h1>') 
    expect(wrapper.vm.renderHtml).toBe('<h1>test</h1>');
  })     

  it('... closePreview function sets renderHtml value to null', () => {    
    wrapper.vm.closePreview() 
    expect(wrapper.vm.renderHtml).toBe(null);
  })       

})