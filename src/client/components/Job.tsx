import React, { useEffect, useState, useRef } from 'react';

import { connect, useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

export const Job = (props: any) => {
  const eventEl = useRef(null);

  // const result = useSelector(state => state.jobs)

  function openForm() {}

  function onAccept() {
    props.addEvent(props.id, '', 'Accepted');
  }

  function onReject() {
    props.addEvent(props.id, '', 'Rejected');
  }

  return (
    <div>
      <div>
        <h1>{props.company} </h1>
        <h1>Events {props.events}</h1>
        <h1>Status {props.status}</h1>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          let eventName = eventEl.current.value;
          console.log(props.id, 'props id Job component');
          props.addEvent(props.id, eventName);
        }}
      >
        <label>Event Name: </label>
        <input type="text" ref={eventEl}></input>
        <button type="submit">Add Event</button>
      </form>

      {/* <button onClick={openForm}> Add Event </button> */}
      <button onClick={onAccept}> Accepted </button>
      <button onClick={onReject}> Rejected </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addEvent: (id: any, eventName: any, statusName: any) => {
      dispatch(actions.addEvent(id, eventName, statusName));
    },
  };
};

export default connect(null, mapDispatchToProps)(Job);
