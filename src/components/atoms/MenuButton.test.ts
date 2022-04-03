import { mount } from '@vue/test-utils';
import MenuButton from './MenuButton.vue';

test("test App Component", function () {
    const wrapper = mount(MenuButton, {
        props: {
            active: true,
            targetView: 'Test',
            buttonText: "World",
            index: 2
        }
    });
    expect(wrapper.text()).toBe('World')
})