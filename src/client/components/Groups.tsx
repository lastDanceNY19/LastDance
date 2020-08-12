import React from 'react';
import Group from './Group'
import { connect} from 'react-redux'

export const Groups = (props: any) => {
  return(
    <div>
        {props.groups.map((el:any) => (
          <Group group={el.name} users={el.users}/>
        ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    groups: state.groups
  }
}

export default connect(mapStateToProps)(Groups);