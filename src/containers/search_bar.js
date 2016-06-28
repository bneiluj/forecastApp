import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    // Overwriting the local methode. Bind this.onInputChange to the THIS
    // Just about binding the context
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // event.target.value is PURE VANILLA JAVASCRIPT
  onInputChange(event) {
    console.log("onInputChange: ", event.target.value)
    // makes sure the callback CONTEXT is correctly setup
    this.setState({ term: event.target.value });
  }

  /**
   * Event object onFormSubmit
   */
  onFormSubmit(event) {
    // We are using the event object
    // Just tell the browser to not submit the form
    event.preventDefault();

    // Fetch weather data, we need to fire the action creator
    this.props.fetchWeather(this.state.term);
    // Will cause our component to re render
    this.setState( { term: '' } );
  }
  render() {
    return (
      <form
        onSubmit={ this.onFormSubmit }
        className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span
          className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  // This causes the action creator to be correctly dispatched
  return bindActionCreators( {fetchWeather}, dispatch );
}
// by passing null - just to say that this container doesn't need the state
// because the container in this case doesn't care about the state
export default connect(null, mapDispatchToProps) (SearchBar);
