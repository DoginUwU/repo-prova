import { shallowMount } from "@vue/test-utils";
import UserAbout from "./UserAbout";

describe("UserAbout Component", () => {
  it("Should be render correctly", () => {
    const wrapper = shallowMount(UserAbout, {
      propsData: {
        user,
      },
    });

    expect(wrapper.exists()).toBeTruthy();
  });

  it("Should be render correctly User data", () => {
    const wrapper = shallowMount(UserAbout, {
      propsData: {
        user,
      },
    });

    expect(wrapper.find("h2").text()).toEqual(user.name);
    expect(wrapper.findAll("p").at(0).text()).toEqual(user.email);
    expect(wrapper.findAll("p").at(1).text()).toEqual(user.bio);

    expect(wrapper.findAll(".item").at(0).text()).toEqual(user.followers);
    expect(wrapper.findAll(".item").at(1).text()).toEqual(user.public_repos);
    expect(wrapper.findAll(".item").at(2).text()).toEqual(user.company);
    expect(wrapper.findAll(".item").at(3).text()).toContain(
      user.twitter_username
    );
  });
});

const user = {
  avatar_url: "image_url",
  name: "John Doe",
  email: "john@example.com",
  bio: "front-end developer.",
  followers: "12",
  public_repos: "45",
  company: "Company Example",
  twitter_username: "JohnDoe",
};
