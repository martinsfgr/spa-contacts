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
      defaultContacts: [],
      filteredContacts: [],
      isLoading: false,
      isAscOrder: true,
      selectedFilter: '',
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    const URL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
    fetch(URL)
    .then(response => response.json())
    .then(response => {
      this.setState({ 
        defaultContacts: response,
        filteredContacts: response,
        isLoading: false 
      })
    });
  }

  handleChange = event => {
    event.preventDefault();

    const { defaultContacts } = this.state;

    const searchedContacts = defaultContacts.filter(contact => {
      return contact.name.toLowerCase().includes(event.target.value);
    });

    this.setState({
      filteredContacts: searchedContacts
    });
  }

  handleClick = (event, target) => {
    event.preventDefault();
    
    const { filteredContacts } = this.state;
    const { isAscOrder } = this.state;
      
    const contactsOrdered = filteredContacts.sort((a, b) => {
      if (isAscOrder) {
        let ascOrder = a[target] > b[target] ? 1 : b[target] > a[target] ? -1 : 0;
        this.setState({ 
          isAscOrder: false,
          selectedFilter: target,
         });

        return ascOrder;
      } else {
        let desOrder = a[target] > b[target] ? -1 : b[target] > a[target] ? 1 : 0;
        this.setState({ 
          isAscOrder: true,
          selectedFilter: target,
         });

        return desOrder;
      }
    })
    
    this.setState({
      filteredContacts: contactsOrdered,
    })
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          selectedFilter={this.state.selectedFilter}
          isAscOrder={this.state.isAscOrder}
        />
        <ErrorBoundary>
          <Contacts 
          data={this.state.filteredContacts} 
          loading={this.state.loading} 
          />
        </ErrorBoundary>
      </React.Fragment>
    )
  }
}

export default App;
