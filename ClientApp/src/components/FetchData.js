import React, { Component } from "react";

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
    console.log("didMount");
  }

  componentDidUpdate() {
    console.log("componentUpd");
  }

  componentWillMount() {
    console.log("Unmounted");
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {/* {Object.keys(forecasts).map((k) => ( */}
          <tr key={forecasts.last_updated}>
            <td>{forecasts.last_updated}</td>
            <td>{forecasts.temp_c}</td>
            <td>{forecasts.temp_f}</td>
            <td>{forecasts.condition.text}</td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    );
  }

  render() {
    {
      console.log("render");
    }
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      FetchData.renderForecastsTable(this.state.forecasts)
    );

    return (
      <div>
        <h1 id="tabelLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=11ce30f54ee4471e9e3193644210503&q=London&aqi=no"
    );
    const data = await response.json();
    console.log("data.current", data.current);
    this.setState({ forecasts: data.current, loading: false });
  }
}
