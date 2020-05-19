import React from 'react';

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import ErrorBoundary from "./components/ErrorBoundary";

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      loading: false,
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    const URL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
    fetch(URL)
    .then(response => response.json())
    .then(response => {
      this.setState({ contacts: response, loading: false })
    });
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <ErrorBoundary>
          <Contacts data={this.state.contacts} loading={this.state.loading} />
        </ErrorBoundary>
      </React.Fragment>
    )
  }
}

export default App;
