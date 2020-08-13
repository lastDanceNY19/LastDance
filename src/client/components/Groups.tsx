import React, { useEffect, useState, useRef } from 'react';
import Group from './Group';
import { connect, useSelector, useDispatch } from 'react-redux';

import * as actions from '../actions/actions';

export const Groups = (props: any) => {
  const nameEl = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function test() {
      let response = await fetch('/get_groups')
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
        .catch((error) => console.log('error ', error));
      console.log(response);
      dispatch(actions.setGroups(response.groups));
    }
    test();
  }, []);

  return (
    <div>
      {props.groups.map((el: any) => (
        <Group group={el.name} users={el.users} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    groups: state.groups,
  };
};

export default connect(mapStateToProps)(Groups);
