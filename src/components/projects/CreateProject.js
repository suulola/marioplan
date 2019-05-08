import React, { Component } from "react";
import { createProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title: null,
    content: null
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
   this.props.createProject(this.state, this.props.history)
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="bg-light">
          <h5 className="text-muted lead"> Create Form</h5>
          <div className="form-group">
            <label htmlFor="title">TItle</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              placeholder="Title"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Project Content</label>
            <textarea
              name="content"
              className="form-control"
              id="content"
              onChange={this.handleChange}
              placeholder='Content'
            />
          </div>
          <button type="submit" className="btn btn-block btn-success shadow">
            Create
          </button>
        </form>
      </div>
    );
  }
}


export default connect(null, {createProject})(withRouter(CreateProject));
