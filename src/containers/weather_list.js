import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

// export default class WeatherList extends Component {
// we not exporting anymore as we are connecting to connect
class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    // let's use destructuring es6 behavior
    const { lon, lat } = cityData.city.coord;

    console.log("temps: ", temps);
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="°C"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
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
