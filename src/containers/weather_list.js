import React, { Component } from 'react';
import { connect } from 'react-redux';

// export default class WeatherList extends Component {
// we not exporting anymore as we are connecting to connect
class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapDispatchToProps(state) {
//   // we are using state.weather because we are using weather in index.js reducer
//   return { weather: state.weather }
// }
// => Better es6 format
function mapDispatchToProps({ weather }) {
  // we are using state.weather because we are using weather in index.js reducer
  return { weather }
}

export default connect(mapDispatchToProps)(WeatherList);
