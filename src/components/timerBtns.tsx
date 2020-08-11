import React from "react";
//type
import { timerBtnsPropsType } from "../types/timer_TYPE";

const TimerBtns: React.FC<timerBtnsPropsType> = ({
  startfn,
  stopfn,
  resumefn,
  resetfn,
  status,
}) => {
  return (
    <div className="container">
      <div className="">
        {status === 0 ? (
          <button className="btn" onClick={startfn}>
            Start
          </button>
        ) : (
          <div>
            <button
              className="btn btn-warning"
              onClick={status === 2 ? resumefn : stopfn}
            >
              {status === 2 ? "Resume" : "Stop"}
            </button>
            <button className="btn  btn-danger" onClick={resetfn}>
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimerBtns;
