class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div id="checkout-container">
        <AccountCreation />
        <Cart />
      </div>
    )
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
    <div id="account-creation">
      <div className="modal">
        <div className="header">
          <h2>Checkout</h2>
          <p><a href="#" className="previous">Cart</a> > <a href="#" className="active">Account Creation</a> > <a>Shipping Information</a> > <a>Payment</a></p>
        </div>
        <form className="account-creation-form">

          <label>Name</label>
          <div className="join-text">
            <input type="text" id="first-name" placeholder="First Name"></input>
            <input type="text" id="last-name" placeholder="Last Name"></input>
          </div>
          <label for="email">Email</label><input type="text" id="email" placeholder="Enter a Email here"></input>
          <label for="pass">Password</label><input type="password" id="pass" placeholder="Enter a password here"></input>
          <label for="pass">Confirm Password</label><input type="password" id="pass" placeholder="Enter a password here"></input>
          <div className="checkbox">
            <input type="checkbox"></input><label>I Agree to the <a href="#">Terms & Conditions</a></label>
          </div>
        </form>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));