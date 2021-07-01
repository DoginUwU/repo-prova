import { shallowMount } from "@vue/test-utils";
import RepositoryItem from "./RepositoryItem";
import { Title } from "./RepositoryItem.styles";

describe("RepositoryItem Component", () => {
  it("Should be render correctly", () => {
    const wrapper = shallowMount(RepositoryItem, {
      propsData: {
        repository,
      },
      stubs: ["router-link"],
    });

    expect(wrapper.exists()).toBeTruthy();
  });

  it("Should be render correctly repository data", () => {
    const wrapper = shallowMount(RepositoryItem, {
      propsData: {
        repository,
      },
      stubs: ["router-link"],
    });

    expect(wrapper.findComponent(Title).text()).toEqual(repository.name);
    expect(wrapper.findAll(".item")).toHaveLength(2);
    expect(wrapper.findAll(".item").at(0).text()).toBe(repository.language);
    expect(wrapper.findAll(".item").at(1).text()).toBe(
      repository.stargazers_count
    );
  });
});

const repository = {
  name: "Repo1",
  language: "Typescript",
  stargazers_count: "142",
  owner: {
    login: "John Doe",
  },
};
