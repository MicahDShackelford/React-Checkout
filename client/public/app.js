class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return React.createElement("div", {
      id: "checkout-container"
    }, React.createElement(AccountCreation, null), React.createElement(Cart, null));
  }

}

let Cart = props => {
  return React.createElement("div", {
    id: "cart"
  }, React.createElement("p", null, "This is my cart"));
};

let AccountCreation = props => {
  return React.createElement("div", {
    id: "account-creation"
  }, React.createElement("div", {
    className: "modal"
  }, React.createElement("div", {
    className: "header"
  }, React.createElement("h2", null, "Checkout"), React.createElement("p", null, React.createElement("a", {
    href: "#",
    className: "previous"
  }, "Cart"), " > ", React.createElement("a", {
    href: "#",
    className: "active"
  }, "Account Creation"), " > ", React.createElement("a", null, "Shipping Information"), " > ", React.createElement("a", null, "Payment"))), React.createElement("form", {
    className: "account-creation-form"
  }, React.createElement("label", null, "Name"), React.createElement("div", {
    className: "join-text"
  }, React.createElement("input", {
    type: "text",
    id: "first-name",
    placeholder: "First Name"
  }), React.createElement("input", {
    type: "text",
    id: "last-name",
    placeholder: "Last Name"
  })), React.createElement("label", {
    for: "email"
  }, "Email"), React.createElement("input", {
    type: "text",
    id: "email",
    placeholder: "Enter a Email here"
  }), React.createElement("label", {
    for: "pass"
  }, "Password"), React.createElement("input", {
    type: "password",
    id: "pass",
    placeholder: "Enter a password here"
  }), React.createElement("label", {
    for: "pass"
  }, "Confirm Password"), React.createElement("input", {
    type: "password",
    id: "pass",
    placeholder: "Enter a password here"
  }), React.createElement("div", {
    className: "checkbox"
  }, React.createElement("input", {
    type: "checkbox"
  }), React.createElement("label", null, "I Agree to the ", React.createElement("a", {
    href: "#"
  }, "Terms & Conditions"))))));
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));