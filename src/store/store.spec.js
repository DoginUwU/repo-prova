import { createLocalVue } from "@vue/test-utils";
import api from "@/services/api";
import MockAdapter from "axios-mock-adapter";
import { storeConfigs } from ".";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Store", () => {
  it("Should be called repos mutation", async () => {
    var mock = new MockAdapter(api);

    const store = new Vuex.Store(storeConfigs);
    mock.onGet("users/JohnDoe").reply(200);
    mock.onGet("users/JohnDoe/repos").reply(200);
    store.commit("getUser", "JohnDoe");
    expect(store.state.user).toStrictEqual({
      repos: [],
    });
  });
  it("Should be called repos mutation with Exception", async () => {
    var mock = new MockAdapter(api);

    const store = new Vuex.Store(storeConfigs);
    store.commit("getUser", "JohnDoe");
    expect(store.state.user).toStrictEqual({
      repos: undefined,
    });
  });
});
