import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NoteActions from '../../actions/notes';

import './NoteList.css';

class NoteList extends React.Component {


  createListNotes(){
    return this.props.notes.map((note)=>{
        return (
          <li
            key={note.id}
            onClick={() => this.props.action.selectNote(note)}
          >
            {note.title}
          </li>
        );
    });
  }

  render() {

    return (
      <div className="NoteList">
        <h1 className="ListTitle">Notes</h1>
        <ul className="List">
          {this.createListNotes()}
        </ul>
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

export default connect(mapStateToProps,mapDispatchToProps)(NoteList);
