import React from 'react';

class Filters extends React.Component {
  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input type="text" className="filters__search__input" placeholder="Pesquisar" onChange={event => this.props.handleChange(event)} />
            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button 
          className={ this.props.selectedFilter === 'name' ? 'filters__item is-selected' : 'filters__item' }
          onClick={event => this.props.handleClick(event, 'name')}
          >
            Nome <i className={ (this.props.selectedFilter === 'name' && this.props.isAscOrder) ? 'fas fa-sort-alpha-up' : 'fas fa-sort-alpha-down' } />
          </button>

          <button
          className={ this.props.selectedFilter === 'country' ? 'filters__item is-selected' : 'filters__item' }
          onClick={event => this.props.handleClick(event, 'country')}
          >
            País <i className={ (this.props.selectedFilter === 'country' && this.props.isAscOrder) ? 'fas fa-sort-alpha-up' : 'fas fa-sort-alpha-down' } />
          </button>

          <button
          className={ this.props.selectedFilter === 'company' ? 'filters__item is-selected' : 'filters__item' }
          onClick={event => this.props.handleClick(event, 'company')}
          >
            Empresa <i className={ (this.props.selectedFilter === 'company' && this.props.isAscOrder) ? 'fas fa-sort-alpha-up' : 'fas fa-sort-alpha-down' } />
          </button>

          <button
          className={ this.props.selectedFilter === 'department' ? 'filters__item is-selected' : 'filters__item' }
          onClick={event => this.props.handleClick(event, 'department')}
          >
            Departamento <i className={ (this.props.selectedFilter === 'department' && this.props.isAscOrder) ? 'fas fa-sort-alpha-up' : 'fas fa-sort-alpha-down' } />
          </button>

          <button
          className={ this.props.selectedFilter === 'admissionDate' ? 'filters__item is-selected' : 'filters__item' }
          onClick={event => this.props.handleClick(event, 'admissionDate')}>
            Data de admissão <i  className={ (this.props.selectedFilter === 'admissionDate' && this.props.isAscOrder) ? 'fas fa-sort-alpha-up' : 'fas fa-sort-alpha-down' } />
          </button>
        </section>
      </div>
    );
  }
}

export default Filters;
