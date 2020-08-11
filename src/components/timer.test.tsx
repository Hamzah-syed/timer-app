import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Timer from "./timer";

let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
describe("testing timer component", () => {
  const timerProps = { h: 0, m: 0, s: 0, ms: 0 };

  beforeEach(() => {
    container = shallow(<Timer timer={timerProps} />);
  });

  test("testing timer component div render", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });

  test("timer should not be empty", () => {
    expect(container.find("#timer")).not.toBeNull();
  });
});
