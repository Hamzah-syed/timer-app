import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import TimerBtns from "./timerBtns";

let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
describe("testing timer buttons component", () => {
  let status = 0;

  beforeEach(() => {
    let status: number = 0;
    container = shallow(
      <TimerBtns
        startfn={jest.fn()}
        stopfn={jest.fn()}
        resumefn={jest.fn()}
        resetfn={jest.fn}
        status={status}
      />
    );
  });

  test("testing timer component div  render shoul be greater than or equal to", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
    console.log(container.debug());
  });

  test("timer start button click", () => {
    container.find("#start").simulate("click");
    expect(setInterval);
    status = 1;
    expect(status === 1);
  });
  //   test("timer stop button click", () => {
  //     container.find("#stop").simulate("click");
  //     expect(setInterval);
  //   });
});
