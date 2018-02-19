import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NoteActions from '../../actions/notes';

import './NoteAdd.css';

class NoteAdd extends React.Component {

  render() {
    let input = '';

    return (
      <div>

        <form className="AddNote"
            onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.action.addToNote(input.value);
            input.value = '';
            }}>
            <input ref={node => { input = node }}
                  className="inputAddNote"/>
          <button className="buttonAddNote" type="submit"> Add Note </button>
        </form>
      </div>
    );
  }
}



function mapStateToProps(state, prop){
  return {
    notes: state.notes
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(NoteActions,dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(NoteAdd);
