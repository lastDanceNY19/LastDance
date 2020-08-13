import React, { useEffect, useState, useRef } from "react";
import Job from "./Job";
import { connect, useSelector, useDispatch } from "react-redux";
import getPipeline from "../reducers/reducer";

import * as actions from "../actions/actions";

export const Pipeline: React.FC = (props: any) => {
  const nameEl = useRef(null);
  const dispatch = useDispatch();

  // make the request to the backend for pipeline info
  useEffect(() => {
    async function test() {
      let response = await fetch("/get_pipeline")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((error) => console.log("error ", error));

      // dispatch(getPipeline())
      dispatch(actions.setPipeline(response));
    }
    test();
  }, []);

  // make the request to the backend for pipeline info
  // const getPipeline = () => async (dispatch, getState) => {
  //   console.log('getting pipeline')
  //   const pipeline = await fetch('/get_pipeline').then(res => res.json())
  //   dispatch(actions.setPipeline(pipeline))
  // }

  function addApp(name: string) {
    fetch("/add_application", {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: { "Content-Type": "application/json" },
    });
  }

  // fire off the set_pipeline action

  return (
    <div>
      <button>Pipeline</button>
      <button>History</button>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          let company = nameEl.current.value;

          addApp(company);
          let userId = 1;
          props.addJob(userId, company);
          console.log(props.jobs);
        }}
      >
        <label>Company Name: </label>
        <input type="text" ref={nameEl}></input>
        <button type="submit">Add Application</button>
      </form>

      {console.log(props.jobs, "state")}

      {props.jobs.map((el: any) => (
        <Job company={el.company} events={el.events} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state, "state");
  return {
    jobs: state.jobs,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addJob: (e: any, company: any) => {
      dispatch(actions.addJob(e, company));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pipeline);
