import React from "react";
import App from "./App";
import { shallow, ShallowWrapper } from "enzyme";
import Timer from "./components/timer";
import TimerBtns from "./components/timerBtns";
import { stringify } from "querystring";

describe("counter app testing", () => {
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  //it will run before every test
  beforeEach(() => {
    container = shallow(<App />);
  });

  test("testing app div render", () => {
    expect(container.find("div").length).toEqual(1);
  });

  // it("testing timer component exist", () => {
  //   expect(container.containsMatchingElement(<Timer />)).toEqual(true);
  // });
  // test("testing timer button component exist", () => {
  //   expect(container.containsMatchingElement(<TimerBtns />)).toEqual(true);
  // });
});
