import { shallowMount } from "@vue/test-utils";
import App from "@/App";
describe("App", () => {
  it("Should be render correctly", () => {
    const wrapper = shallowMount(App, {
      stubs: ["router-view"],
    });

    expect(wrapper.exists()).toBeTruthy();
  });
});
