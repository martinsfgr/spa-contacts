import React from 'react';

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts"

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
    };
  }

  componentWillMount() {
    const URL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
    fetch(URL)
    .then(response => response.json())
    .then(response => {
      this.setState({ contacts: response })
    });
  }

  render() {
    const { contacts } = this.state;
    console.log(contacts);

    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts data={this.state.contacts} />
      </React.Fragment>
    )
  }
}

export default App;
