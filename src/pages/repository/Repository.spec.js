import Vuex from "vuex";
import VueRouter from "vue-router";
import api from "@/services/api";
import MockAdapter from "axios-mock-adapter";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Repository from "./Repository";

const localVue = createLocalVue();
localVue.use(Vuex);

const repos = [
  {
    name: "Repo1",
    description: "Repo description.",
    svn_url: "http://example.com.br",
    created_at: "2020-11-06T05:32:52Z",
    issues_url: "http://example.com.br/issues{/number}",
  },
];

let store = new Vuex.Store({
  state: {
    user: {
      login: "JohnDoe",
      avatar_url: "image_url",
      repos,
    },
  },
});

const router = new VueRouter();

describe("Repository Page", () => {
  it("Should be render correctly", async () => {
    var mock = new MockAdapter(api);
    mock.onGet(repos[0].issues_url.replace("{/number}", "")).reply(200, [
      {
        id: 142,
        title: "Issue1",
        user: {
          login: "JohnDoe",
          avatar_url: "image_url",
        },
        labels: [
          {
            id: 155,
            name: "Label1",
          },
        ],
      },
    ]);
    const wrapper = shallowMount(Repository, {
      mocks: {
        $route: {
          params: {
            repository: "Repo1",
          },
        },
      },
      store,
      localVue,
      stubs: ["router-link"],
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.exists()).toBeTruthy();
  });

  it("Should be render correctly without User data", () => {
    localVue.use(VueRouter);
    let emptyStore = new Vuex.Store({
      state: {
        user: {
          repos: [],
        },
      },
    });
    const wrapper = shallowMount(Repository, {
      store: emptyStore,
      router,
      localVue,
    });

    expect(wrapper.exists()).toBeTruthy();
  });
});
