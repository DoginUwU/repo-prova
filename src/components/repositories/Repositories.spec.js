import { shallowMount } from "@vue/test-utils";
import Repositories from "./Repositories";
import RepositoryItem from "../repositoryItem/RepositoryItem";

describe("Repositories Component", () => {
  it("Should be render correctly", () => {
    const wrapper = shallowMount(Repositories, {
      propsData: {
        repositories: [],
      },
    });

    expect(wrapper.exists()).toBeTruthy();
  });

  it("Should be render correctly RepositoryItem's", () => {
    const wrapper = shallowMount(Repositories, {
      propsData: {
        repositories,
      },
    });

    expect(wrapper.findAllComponents(RepositoryItem)).toHaveLength(2);
  });
});

const repositories = [
  {
    name: "Repo1",
  },
  {
    name: "Repo2",
  },
];
