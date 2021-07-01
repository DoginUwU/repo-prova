import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import Header from "./Header";
import Searchbar from "../searchbar/Searchbar";
import { routes } from "@/routes/router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("Header Component", () => {
  it("Should be render correctly", () => {
    const router = new VueRouter();
    const wrapper = shallowMount(Header, {
      localVue,
      router,
    });

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find(".search").exists()).toBe(true);
  });

  it("Should be render correctly when Repository Page load", async () => {
    const router = new VueRouter({ routes });
    const wrapper = shallowMount(Header, {
      localVue,
      router,
    });
    router.push("/repository/test/test");
    wrapper.vm.$options.watch.$route.call(wrapper.vm, {
      to: {
        path: "/repository/test/test",
      },
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".search").exists()).toBe(false);
  });
});
