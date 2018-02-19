import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NoteActions from '../../actions/notes';
// <h1> {this.props.notes.title} </h1>

import './NoteTitle.css';

class NoteTitle extends React.Component {

  constructor(props){
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event){
    this.props.action.modifyTitle(this.props.notes, event.target.value);
  }


  render() {
      return (
      <div>
        <input className="NoteTitle"
               value={this.props.notes.title ? this.props.notes.title : 'Click a Note'}
               onChange={this.handleOnChange}
         />
      </div>
      );
  }
}

function mapStateToProps(state, prop){
  return {
    notes: state.selectedNote
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(NoteActions,dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(NoteTitle);
