import { mount } from '@vue/test-utils';
import MenuButton from './MenuButton.vue';

test("test App Component",function(){
  const wrapper = mount(MenuButton);
  expect(wrapper.text()).toBe('Hello World')
})