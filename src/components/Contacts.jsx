import React from "react";

import Contact from "./Contact";
import Loading from "./Loading";

class Contacts extends React.Component {
  render() {
    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <article className="contact">
            <span className="contact__avatar" />
            <span className="contact__data">Nome</span>
            <span className="contact__data">Telefone</span>
            <span className="contact__data">País</span>
            <span className="contact__data">Empresa</span>
            <span className="contact__data">Departamento</span>
            <span className="contact__data">Admissão</span>
          </article>
          {
            this.props.isLoading
            ? <Loading />
            : null
          }
          
          {
            this.props.data
            ? this.props.data.map(contact => <Contact key={contact.id} data={contact} />)
            : this.props.children
          }
        </section>
      </div>
    );
  }
}

export default Contacts;
