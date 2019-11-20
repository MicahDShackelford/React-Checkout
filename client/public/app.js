class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "ShippingInformation"
    };
  }

  render() {
    if (this.state.currentPage === "AccountCreation") {
      return React.createElement("div", {
        id: "checkout-container"
      }, React.createElement(AccountCreation, null), React.createElement(Cart, null));
    } else if (this.state.currentPage === "ShippingInformation") {
      return React.createElement("div", {
        id: "checkout-container"
      }, React.createElement(ShippingInformation, null), React.createElement(Cart, null));
    }
  }

}

let Cart = props => {
  return React.createElement("div", {
    id: "cart"
  }, React.createElement("p", null, "This is my cart"));
};

let AccountCreation = props => {
  return React.createElement("div", {
    className: "page"
  }, React.createElement("div", {
    className: "modal"
  }, React.createElement("div", {
    className: "header"
  }, React.createElement("h2", null, "Create Your Account"), React.createElement("p", null, React.createElement("a", {
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
    htmlFor: "email"
  }, "Email"), React.createElement("input", {
    type: "text",
    id: "email",
    placeholder: "Enter a Email here"
  }), React.createElement("label", {
    htmlFor: "pass"
  }, "Password"), React.createElement("input", {
    type: "new-password",
    id: "pass",
    placeholder: "Enter a password here"
  }), React.createElement("label", {
    htmlFor: "passConf"
  }, "Confirm Password"), React.createElement("input", {
    type: "new-password",
    id: "passConf",
    placeholder: "Enter a password here"
  }), React.createElement("div", {
    className: "checkbox"
  }, React.createElement("input", {
    type: "checkbox"
  }), React.createElement("label", null, "I would like to paticipate in our mailing list (for special offers).")), React.createElement("div", {
    className: "checkbox"
  }, React.createElement("input", {
    type: "checkbox"
  }), React.createElement("label", null, "I Agree to the ", React.createElement("a", {
    href: "#"
  }, "Terms & Conditions"))), React.createElement("div", {
    className: "bottom-nav"
  }, React.createElement("button", null, React.createElement("i", {
    className: "fas fa-arrow-circle-left"
  }), " Cart"), React.createElement("button", null, "Shipping Information ", React.createElement("i", {
    className: "fas fa-arrow-circle-right"
  }))), React.createElement("p", {
    className: "center"
  }, "Or if you are already a member you can login ", React.createElement("a", {
    href: "#"
  }, "here"), "!"))));
};

let ShippingInformation = props => {
  return React.createElement("div", {
    className: "page"
  }, React.createElement("div", {
    className: "modal"
  }, React.createElement("div", {
    className: "header"
  }, React.createElement("h2", null, "Checkout"), React.createElement("p", null, React.createElement("a", {
    href: "#",
    className: "previous"
  }, "Cart"), " > ", React.createElement("a", {
    href: "#",
    className: "previous"
  }, "Account Creation"), " > ", React.createElement("a", {
    href: "#",
    className: "active"
  }, "Shipping Information"), " > ", React.createElement("a", null, "Payment")))));
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));