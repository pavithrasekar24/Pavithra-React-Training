import React, { Component } from 'react';
import { StatusContext } from '../../../Component/HooksExample/ContentTask/StatusContext';
import { CompletedTask } from '../../../Component/HooksExample/Task/CompletedTask';
export class ProgressTask extends Component {
  static contextType = StatusContext;
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <hr />
        <h3>ProgressTask </h3>
        <button
          onClick={() => {
            this.context.setStatus('Progress');
          }}
        >
          Update User
        </button>
        <p>{`Current User: ${this.context.status}`}</p>
        <CompletedTask user={this.props.user} />
      </div>
    );
  }
}
