import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NoteActions from '../../actions/notes';

import './NoteContent.css';

class NoteContent extends React.Component {

  constructor(props){
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event){
    this.props.action.modifyContent(this.props.notes, event.target.value);
  }
  //<p> {this.props.notes.content} </p>
  render() {

    return (
      <div>
        <textarea value={this.props.notes.content ? this.props.notes.content : ''}
                  onChange={this.handleOnChange}
                  className="NoteContent"
        ></textarea>
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

export default connect(mapStateToProps,mapDispatchToProps)(NoteContent);
