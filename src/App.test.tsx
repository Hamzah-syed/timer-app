import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("counter testing", () => {
  test("testing app div render", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").length).toEqual(1);
  });
});
