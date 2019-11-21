class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "AccountCreation",
      user: {},
      shipping: {},
      payment: {}
    };
    this.nextHandler = this.nextHandler.bind(this);
  }

  nextHandler(next, setstate) {
    let type = Object.keys(setstate)[0];
    return new Promise((resolve, reject) => {
      this.setState({
        currentPage: next,
        [type]: setstate[type]
      });
      resolve();
    }).then(() => {
      console.log(this.state);
    });
  }

  render() {
    if (this.state.currentPage === "AccountCreation") {
      return React.createElement("div", {
        id: "checkout-container"
      }, React.createElement(AccountCreation, {
        next: "ShippingInformation",
        click: this.nextHandler
      }), React.createElement(Cart, null));
    } else if (this.state.currentPage === "ShippingInformation") {
      return React.createElement("div", {
        id: "checkout-container"
      }, React.createElement(ShippingInformation, {
        next: "PaymentInformation",
        click: this.nextHandler
      }), React.createElement(Cart, null));
    } else if (this.state.currentPage === "PaymentInformation") {
      return React.createElement("div", {
        id: "checkout-container"
      }, React.createElement(PaymentInformation, {
        next: "Confirmation",
        click: this.nextHandler
      }), React.createElement(Cart, null));
    } else if (this.state.currentPage === "Confirmation") {
      return React.createElement("div", {
        id: "checkout-container"
      }, React.createElement(Confirmation, {
        user: this.props.user,
        shipping: this.props.shipping,
        payment: this.props.payment
      }), React.createElement(Cart, null));
    }
  }

}

let Cart = props => {
  return React.createElement("div", {
    id: "cart"
  }, React.createElement("p", null, "This is my cart"));
};

let AccountCreation = props => {
  let handleSubmit = event => {
    event.preventDefault();
    let user = {
      user: {
        firstName: event.target[0].value,
        lastName: event.target[1].value,
        email: event.target[2].value,
        password: event.target[3].value,
        mailingList: event.target[5].checked,
        registerDate: new Date()
      }
    };
    props.click(props.next, user);
  };

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
  }, "Account Creation"), " > ", React.createElement("a", null, "Shipping Information"), " > ", React.createElement("a", null, "Payment"), " > ", React.createElement("a", null, "Confirmation"))), React.createElement("form", {
    className: "checkout-form",
    onSubmit: handleSubmit
  }, React.createElement("label", null, "Name"), React.createElement("div", {
    className: "join-text"
  }, React.createElement("input", {
    type: "text",
    id: "account-creation-first-name",
    placeholder: "First Name"
  }), React.createElement("input", {
    type: "text",
    id: "account-creation-last-name",
    placeholder: "Last Name"
  })), React.createElement("label", {
    htmlFor: "email"
  }, "Email"), React.createElement("input", {
    type: "email",
    id: "account-creation-email",
    placeholder: "Enter a Email here"
  }), React.createElement("label", {
    htmlFor: "pass"
  }, "Password"), React.createElement("input", {
    type: "password",
    id: "account-creation-pass",
    placeholder: "Enter a password here"
  }), React.createElement("label", {
    htmlFor: "passConf"
  }, "Confirm Password"), React.createElement("input", {
    type: "password",
    id: "account-creation-passConf",
    placeholder: "Enter a password here"
  }), React.createElement("div", {
    className: "checkbox"
  }, React.createElement("input", {
    type: "checkbox",
    value: "newsletter"
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
  }), " Back"), React.createElement("button", {
    type: "submit"
  }, "Next ", React.createElement("i", {
    className: "fas fa-arrow-circle-right"
  }))), React.createElement("p", {
    className: "center"
  }, "Or if you are already a member you can login ", React.createElement("a", {
    href: "#"
  }, "here"), "!"))));
};

let ShippingInformation = props => {
  let handleSubmit = event => {
    event.preventDefault();
    let shipping = {
      shipping: {
        lineOne: event.target[0].value,
        lineTwo: event.target[1].value,
        state: event.target[2].value,
        city: event.target[3].value,
        zip: event.target[4].value,
        phoneNumber: event.target[5].value
      }
    };
    props.click(props.next, shipping);
  };

  return React.createElement("div", {
    className: "page"
  }, React.createElement("div", {
    className: "modal"
  }, React.createElement("div", {
    className: "header"
  }, React.createElement("h2", null, "Shipping Information"), React.createElement("p", null, React.createElement("a", {
    href: "#",
    className: "previous"
  }, "Cart"), " > ", React.createElement("a", {
    href: "#",
    className: "previous"
  }, "Account Creation"), " > ", React.createElement("a", {
    href: "#",
    className: "active"
  }, "Shipping Information"), " > ", React.createElement("a", null, "Payment"), " > ", React.createElement("a", null, "Confirmation")), React.createElement("form", {
    className: "checkout-form",
    onSubmit: handleSubmit
  }, React.createElement("label", null, "Address"), React.createElement("input", {
    type: "text",
    placeholder: "Address Line One"
  }), React.createElement("input", {
    type: "text",
    placeholder: "Address Line Two"
  }), React.createElement("div", {
    className: "join-div"
  }, React.createElement("div", {
    className: "join-item"
  }, React.createElement("label", null, "State"), React.createElement("select", null, React.createElement("option", {
    value: "AL"
  }, "AL"), React.createElement("option", {
    value: "AK"
  }, "AK"), React.createElement("option", {
    value: "AR"
  }, "AR"), React.createElement("option", {
    value: "AZ"
  }, "AZ"), React.createElement("option", {
    value: "CA"
  }, "CA"), React.createElement("option", {
    value: "CO"
  }, "CO"), React.createElement("option", {
    value: "CT"
  }, "CT"), React.createElement("option", {
    value: "DC"
  }, "DC"), React.createElement("option", {
    value: "DE"
  }, "DE"), React.createElement("option", {
    value: "FL"
  }, "FL"), React.createElement("option", {
    value: "GA"
  }, "GA"), React.createElement("option", {
    value: "HI"
  }, "HI"), React.createElement("option", {
    value: "IA"
  }, "IA"), React.createElement("option", {
    value: "ID"
  }, "ID"), React.createElement("option", {
    value: "IL"
  }, "IL"), React.createElement("option", {
    value: "IN"
  }, "IN"), React.createElement("option", {
    value: "KS"
  }, "KS"), React.createElement("option", {
    value: "KY"
  }, "KY"), React.createElement("option", {
    value: "LA"
  }, "LA"), React.createElement("option", {
    value: "MA"
  }, "MA"), React.createElement("option", {
    value: "MD"
  }, "MD"), React.createElement("option", {
    value: "ME"
  }, "ME"), React.createElement("option", {
    value: "MI"
  }, "MI"), React.createElement("option", {
    value: "MN"
  }, "MN"), React.createElement("option", {
    value: "MO"
  }, "MO"), React.createElement("option", {
    value: "MS"
  }, "MS"), React.createElement("option", {
    value: "MT"
  }, "MT"), React.createElement("option", {
    value: "NC"
  }, "NC"), React.createElement("option", {
    value: "NE"
  }, "NE"), React.createElement("option", {
    value: "NH"
  }, "NH"), React.createElement("option", {
    value: "NJ"
  }, "NJ"), React.createElement("option", {
    value: "NM"
  }, "NM"), React.createElement("option", {
    value: "NV"
  }, "NV"), React.createElement("option", {
    value: "NY"
  }, "NY"), React.createElement("option", {
    value: "ND"
  }, "ND"), React.createElement("option", {
    value: "OH"
  }, "OH"), React.createElement("option", {
    value: "OK"
  }, "OK"), React.createElement("option", {
    value: "OR"
  }, "OR"), React.createElement("option", {
    value: "PA"
  }, "PA"), React.createElement("option", {
    value: "RI"
  }, "RI"), React.createElement("option", {
    value: "SC"
  }, "SC"), React.createElement("option", {
    value: "SD"
  }, "SD"), React.createElement("option", {
    value: "TN"
  }, "TN"), React.createElement("option", {
    value: "TX"
  }, "TX"), React.createElement("option", {
    value: "UT"
  }, "UT"), React.createElement("option", {
    value: "VT"
  }, "VT"), React.createElement("option", {
    value: "VA"
  }, "VA"), React.createElement("option", {
    value: "WA"
  }, "WA"), React.createElement("option", {
    value: "WI"
  }, "WI"), React.createElement("option", {
    value: "WV"
  }, "WV"), React.createElement("option", {
    value: "WY"
  }, "WY"))), React.createElement("div", {
    className: "join-item"
  }, React.createElement("label", null, "City"), React.createElement("input", {
    type: "text",
    placeholder: "Enter your City"
  })), React.createElement("div", {
    className: "join-item"
  }, React.createElement("label", null, "Zip Code"), React.createElement("input", {
    type: "text",
    placeholder: "Enter your Zip"
  }))), React.createElement("label", null, "Phone Number"), React.createElement("input", {
    type: "tel"
  }), React.createElement("div", {
    className: "bottom-nav"
  }, React.createElement("button", null, React.createElement("i", {
    className: "fas fa-arrow-circle-left"
  }), " Back"), React.createElement("button", {
    type: "submit"
  }, "Next ", React.createElement("i", {
    className: "fas fa-arrow-circle-right"
  })))))));
};

let PaymentInformation = props => {
  let handleSubmit = event => {
    event.preventDefault();
    let payment = {
      payment: {
        number: event.target[0].value + event.target[1].value + event.target[2].value + event.target[3].value,
        expiration: event.target[4].value,
        cvv: event.target[5].value,
        zip: event.target[6].value
      }
    };
    props.click(props.next, payment);
  };

  return React.createElement("div", {
    className: "page"
  }, React.createElement("div", {
    className: "modal"
  }, React.createElement("div", {
    className: "header"
  }, React.createElement("h2", null, "Payment Information"), React.createElement("p", null, React.createElement("a", {
    href: "#",
    className: "previous"
  }, "Cart"), " > ", React.createElement("a", {
    href: "#",
    className: "previous"
  }, "Account Creation"), " > ", React.createElement("a", {
    href: "#",
    className: "previous"
  }, "Shipping Information"), " > ", React.createElement("a", {
    className: "active"
  }, "Payment"), " > ", React.createElement("a", null, "Confirmation")), React.createElement("form", {
    className: "checkout-form",
    onSubmit: handleSubmit
  }, React.createElement("div", {
    className: "payment center-div"
  }, React.createElement("label", null, "Card Number"), React.createElement("div", {
    className: "card-number"
  }, React.createElement("input", {
    type: "text",
    style: {
      "text-align": "right"
    }
  }), React.createElement("p", null, "-"), React.createElement("input", {
    type: "text",
    style: {
      "text-align": "center"
    }
  }), React.createElement("p", null, "-"), React.createElement("input", {
    type: "text",
    style: {
      "text-align": "center"
    }
  }), React.createElement("p", null, "-"), React.createElement("input", {
    type: "text",
    style: {
      "text-align": "left"
    }
  })), React.createElement("div", null, React.createElement("label", null, "Expiration Date"), React.createElement("input", {
    type: "date"
  })), React.createElement("div", null, React.createElement("label", null, "CVV"), React.createElement("input", {
    type: "text"
  })), React.createElement("div", null, React.createElement("label", null, "Zip Code"), React.createElement("input", {
    type: "text"
  }))), React.createElement("div", {
    className: "bottom-nav"
  }, React.createElement("button", null, React.createElement("i", {
    className: "fas fa-arrow-circle-left"
  }), " Back"), React.createElement("button", {
    type: "submit"
  }, "Next ", React.createElement("i", {
    className: "fas fa-arrow-circle-right"
  })))))));
};

let Confirmation = props => {
  return React.createElement("div", {
    className: "page"
  }, React.createElement("div", {
    className: "modal"
  }, React.createElement("div", {
    className: "header"
  }, React.createElement("h2", null, "Confirmation"), React.createElement("p", null, React.createElement("a", {
    href: "#",
    className: "previous"
  }, "Cart"), " > ", React.createElement("a", {
    href: "#",
    className: "previous"
  }, "Account Creation"), " > ", React.createElement("a", {
    href: "#",
    className: "previous"
  }, "Shipping Information"), " > ", React.createElement("a", {
    href: "#",
    className: "previous"
  }, "Payment"), " > ", React.createElement("a", {
    className: "active"
  }, "Confirmation")))));
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));