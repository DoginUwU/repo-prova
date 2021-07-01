import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "./Home";

const localVue = createLocalVue();
localVue.use(Vuex);

let store = new Vuex.Store({
  state: {
    user: {
      repos: [],
    },
  },
});

describe("Home Page", () => {
  it("Should be render correctly", () => {
    const wrapper = shallowMount(Home, {
      store,
      localVue,
    });

    expect(wrapper.exists()).toBeTruthy();
  });
});
