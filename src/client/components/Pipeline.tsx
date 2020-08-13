import React, { useEffect, useState, useRef } from 'react';
import Job from './Job';
import { connect, useSelector, useDispatch } from 'react-redux';
import getPipeline from '../reducers/reducer';

import * as actions from '../actions/actions';

export const Pipeline: React.FC = (props: any) => {
  const nameEl = useRef(null);
  const dispatch = useDispatch();
  const [view, setView] = useState(true);

  // GETS DATA FROM BACKEND
  useEffect(() => {
    async function test() {
      let response = await fetch('/get_pipeline')
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
        .catch((error) => console.log('error ', error));

      // SETS JOBS STATE (REDUX) TO THE DATA RECEIVED FROM BACKEND
      dispatch(actions.setPipeline(response));
    }
    test();
  }, []);

  function addApp(name: string) {
    fetch('/add_application', {
      method: 'POST',
      body: JSON.stringify({ name: name }),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // fire off the set_pipeline action

  const clickPipeline = () => {
    setView(true);
  };

  const clickHistory = () => {
    setView(false);
  };

  return (
    <div>
      <button onClick={clickPipeline}>Pipeline</button>
      <button onClick={clickHistory}>History</button>

      {/* IF VIEW IS TRUE, RENDER FIRST DIV, IF IT IS FALSE, WE RENDER SECOND DIV */}
      {view ? (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // form input
              let company = nameEl.current.value;
              addApp(company);
              props.addJob(company);
            }}
          >
            <label>Company Name: </label>
            <input type="text" ref={nameEl}></input>
            <button type="submit">Add Application</button>
          </form>
          {props.jobs &&
            props.jobs.map((el: any) => {
              if (el.status === 'pending') {
                return (
                  <Job company={el.company} events={el.events} status={el.status} id={el.id}></Job>
                );
              }
            })}
        </div>
      ) : (
        <div>
          {props.jobs &&
            props.jobs.map((el: any) => {
              if (el.status !== 'pending') {
                return (
                  <Job company={el.company} events={el.events} status={el.status} id={el.id}></Job>
                );
              }
            })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    jobs: state.jobs,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addJob: (company: any) => {
      dispatch(actions.addJob(company));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pipeline);
