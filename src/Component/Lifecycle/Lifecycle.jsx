import React, { Component } from 'react';
import './Lifecycle.css';
export class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      details: {
        city: 'chennai',
        state: '€TN',
      },
    };
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    // this.setState({ [name]: value });
    let obj = { ...this.state.details };
    obj[name] = value;

    this.setState({ details: obj });
  };

  componentDidMount() {
    console.log('class---mouting');
  }
  shouldComponentUpdate() {
    //readOnly -->mode return false
    //timer ==10 return false
    // return false;
  }
  // bydefault true  -> thaty state  variable change

  componentDidUpdate(prevProps, prevState) {
    if (prevState.details.city !== this.state.details.city) {
      console.log('class--updating');
    }
  }

  // componentWillUnMount() {
  //   alert('destroy');
  //   console.log('class--unmouting');
  // }
  render() {
    return (
      <div className="cl-content">
        <h4>Class Component</h4>
        <h5>(stateFull Component) </h5>
        <li>1.ComponentDidMount (mounting)</li>
        <li>2.ShouldComponentUpdate(before update)</li>
        <li>3.componentDidUpdate(after update [city],state,props change)</li>
        <li>4.componentWillUnMount(unmouting destroy)</li>
        <em>
          {this.state.details.city} {this.state.details.state}
        </em>
        <input
          type="text"
          name="city"
          value={this.state.details.city}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="state"
          value={this.state.details.state}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
