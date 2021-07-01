import { shallowMount } from "@vue/test-utils";
import Searchbar from "./Searchbar";
import { Input, Container } from "./Searchbar.styles";

describe("RepositoryItem Component", () => {
  it("Should be render correctly", () => {
    const wrapper = shallowMount(Searchbar, {
      data: () => ({
        userName: null,
      }),
    });

    expect(wrapper.exists()).toBeTruthy();
  });

  it("Should be change userName variable on typing", async () => {
    const handleSearch = jest.spyOn(Searchbar.methods, "handleSearch");
    const wrapper = shallowMount(Searchbar, {
      data: () => ({
        userName: null,
      }),
    });
    const input = wrapper.findComponent(Input);
    input.element.value = "Facebook";

    await wrapper.find("form").trigger("submit.prevent");

    expect(handleSearch).toHaveBeenCalled();

    handleSearch.mockReset();
  });
});
