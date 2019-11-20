class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "ShippingInformation"
    }
  }

  render() {
    if(this.state.currentPage === "AccountCreation") {
      return (
        <div id="checkout-container">
          <AccountCreation />
          <Cart />
        </div>
      )
    }else if(this.state.currentPage === "ShippingInformation") {
      return (
        <div id="checkout-container">
          <ShippingInformation />
          <Cart />
        </div>
      )
    }
  }
}
let Cart = (props) => {
  return (
    <div id="cart">
      <p>This is my cart</p>
    </div>
  )
}

let AccountCreation = (props) => {
  return (
    <div className="page">
      <div className="modal">
        <div className="header">
          <h2>Create Your Account</h2>
          <p><a href="#" className="previous">Cart</a> > <a href="#" className="active">Account Creation</a> > <a>Shipping Information</a> > <a>Payment</a></p>
        </div>
        <form className="account-creation-form">
          <label>Name</label>
          <div className="join-text">
            <input type="text" id="first-name" placeholder="First Name"></input>
            <input type="text" id="last-name" placeholder="Last Name"></input>
          </div>
          <label htmlFor="email">Email</label><input type="text" id="email" placeholder="Enter a Email here"></input>
          <label htmlFor="pass">Password</label><input type="new-password" id="pass" placeholder="Enter a password here"></input>
          <label htmlFor="passConf">Confirm Password</label><input type="new-password" id="passConf" placeholder="Enter a password here"></input>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label>I would like to paticipate in our mailing list (for special offers).</label>
          </div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label>I Agree to the <a href="#">Terms & Conditions</a></label>
          </div>
          <div className="bottom-nav">
            <button><i className="fas fa-arrow-circle-left"></i> Cart</button>
            <button>Shipping Information <i className="fas fa-arrow-circle-right"></i></button>
          </div>
          <p className="center">Or if you are already a member you can login <a href="#">here</a>!</p>
        </form>
      </div>
    </div>
  )
}

let ShippingInformation = (props) => {
  return (
    <div className="page">
      <div className="modal">
        <div className="header">
          <h2>Checkout</h2>
          <p><a href="#" className="previous">Cart</a> > <a href="#" className="previous">Account Creation</a> > <a href="#" className="active">Shipping Information</a> > <a>Payment</a></p>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));