class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "AccountCreation",
      user: {},
      shipping: {},
      payment: {}
    }
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
    })
      .then(() => {
        // console.log(this.state);
      })
  }

  render() {
    if(this.state.currentPage === "AccountCreation") {
      return (
        <div id="checkout-container">
          <AccountCreation next="ShippingInformation" click={this.nextHandler} />
          <Cart />
        </div>
      )
    }else if(this.state.currentPage === "ShippingInformation") {
      return (
        <div id="checkout-container">
          <ShippingInformation next="PaymentInformation" click={this.nextHandler} />
          <Cart />
        </div>
      )
    }else if(this.state.currentPage === "PaymentInformation") {
      return (
        <div id="checkout-container">
          <PaymentInformation next="Confirmation" click={this.nextHandler}  />
          <Cart />
        </div>
      )
    }else if(this.state.currentPage === "Confirmation") {
      return (
        <div id="checkout-container">
          <Confirmation user={this.state.user} shipping={this.state.shipping} payment={this.state.payment} />
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
  let handleSubmit = (event) => {
    event.preventDefault();
    let user = {user:{
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email:event.target[2].value,
      password: event.target[3].value,
      mailingList: event.target[5].checked,
      registerDate: new Date()}};
    props.click(props.next, user);
  }

  return (
    <div className="page">
      <div className="modal">
        <div className="header">
          <h2>Create Your Account</h2>
          <p><a href="#" className="previous">Cart</a> > <a href="#" className="active">Account Creation</a> > <a>Shipping Information</a> > <a>Payment</a> > <a>Confirmation</a></p>
        </div>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <div className="join-text">
            <input type="text" id="account-creation-first-name" placeholder="First Name"></input>
            <input type="text" id="account-creation-last-name" placeholder="Last Name"></input>
          </div>
          <label htmlFor="email">Email</label><input type="email" id="account-creation-email" placeholder="Enter a Email here"></input>
          <label htmlFor="pass">Password</label><input type="password" id="account-creation-pass" placeholder="Enter a password here"></input>
          <label htmlFor="passConf">Confirm Password</label><input type="password" id="account-creation-passConf" placeholder="Enter a password here"></input>
          <div className="checkbox">
            <input type="checkbox" value="newsletter"></input>
            <label>I would like to paticipate in our mailing list (for special offers).</label>
          </div>
          <div className="checkbox">
            <input type="checkbox"></input>
            <label>I Agree to the <a href="#">Terms & Conditions</a></label>
          </div>
          <div className="bottom-nav">
            <button><i className="fas fa-arrow-circle-left"></i> Back</button>
            <button type="submit">Next <i className="fas fa-arrow-circle-right"></i></button>
          </div>
          <p className="center">Or if you are already a member you can login <a href="#">here</a>!</p>
        </form>
      </div>
    </div>
  )
}
let ShippingInformation = (props) => {
  let handleSubmit = (event) => {
    event.preventDefault();
    let shipping = {shipping:{
      lineOne: event.target[0].value,
      lineTwo: event.target[1].value,
      state: event.target[2].value,
      city: event.target[3].value,
      zip: event.target[4].value,
      phoneNumber: event.target[5].value}};
    props.click(props.next, shipping);
  }
  return (
    <div className="page">
      <div className="modal">
        <div className="header">
          <h2>Shipping Information</h2>
          <p><a href="#" className="previous">Cart</a> > <a href="#" className="previous">Account Creation</a> > <a href="#" className="active">Shipping Information</a> > <a>Payment</a> > <a>Confirmation</a></p>
          <form className="checkout-form" onSubmit={handleSubmit}>
            <label>Address</label>
            <input type="text" placeholder="Address Line One"></input>
            <input type="text" placeholder="Address Line Two"></input>
            <div className="join-div">
              <div className="join-item">
                <label>State</label>
                <select>
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AR">AR</option>
                  <option value="AZ">AZ</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DC">DC</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="IA">IA</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="MA">MA</option>
                  <option value="MD">MD</option>
                  <option value="ME">ME</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MO">MO</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="NC">NC</option>
                  <option value="NE">NE</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NV">NV</option>
                  <option value="NY">NY</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WI">WI</option>
                  <option value="WV">WV</option>
                  <option value="WY">WY</option>
                </select>
              </div>
              <div className="join-item">
                <label>City</label>
                <input type="text" placeholder="Enter your City"></input>
              </div>
              <div className="join-item">
                <label>Zip Code</label>
                <input type="text" placeholder="Enter your Zip"></input>
              </div>
            </div>
            <label>Phone Number</label>
            <input type="tel"></input>
            <div className="bottom-nav">
              <button><i className="fas fa-arrow-circle-left"></i> Back</button>
              <button type="submit">Next <i className="fas fa-arrow-circle-right"></i></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
let PaymentInformation = (props) => {
  let handleSubmit = (event) => {
    event.preventDefault();
    let payment = {payment: {
      number: event.target[0].value + event.target[1].value + event.target[2].value + event.target[3].value,
      expiration: event.target[4].value,
      cvv: event.target[5].value,
      zip: event.target[6].value
    }};
    props.click(props.next, payment)
  }
  return (
    <div className="page">
      <div className="modal">
        <div className="header">
          <h2>Payment Information</h2>
          <p><a href="#" className="previous">Cart</a> > <a href="#" className="previous">Account Creation</a> > <a href="#" className="previous">Shipping Information</a> > <a className="active">Payment</a> > <a>Confirmation</a></p>
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="payment center-div">
              <label>Card Number</label>
              <div className="card-number">
                <input type="text" style={{"text-align": "right"}}></input>
                <p>-</p>
                <input type="text" style={{"text-align": "center"}}></input>
                <p>-</p>
                <input type="text"style={{"text-align": "center"}}></input>
                <p>-</p>
                <input type="text" style={{"text-align": "left"}}></input>
              </div>
                <div>
                  <label>Expiration Date</label>
                  <input type="date"></input>
                </div>
                <div>
                  <label>CVV</label>
                  <input type="text"></input>
                </div>
                <div>
                  <label>Zip Code</label>
                  <input type="text"></input>
                </div>
            </div>
            <div className="bottom-nav">
              <button><i className="fas fa-arrow-circle-left"></i> Back</button>
              <button type="submit">Next <i className="fas fa-arrow-circle-right"></i></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
let Confirmation = (props) => {

  let post = (obj) => {
    fetch('http://127.0.0.1:3000/api/checkout', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(obj)
    });
  }
  post({user: props.user, shipping: props.shipping, payment: props.payment});

  return (
    <div className="page">
      <div className="modal">
        <div className="header">
          <h2>Confirmation</h2>
          <p><a href="#" className="previous">Cart</a> > <a href="#" className="previous">Confirm your Information</a> > <a href="#" className="previous">Shipping Information</a> > <a href="#" className="previous">Payment</a> > <a className="active">Confirmation</a></p>
          <div className="confirm">
            <ul>
              <li className="head">Account</li>
              <li><span className="title">First Name:</span> <span className="content">{props.user.firstName}</span></li>
              <li><span className="title">Last Name:</span> <span className="content">{props.user.lastName}</span></li>
              <li><span className="title">Email:</span> <span className="content">{props.user.email}</span></li>
              <li className="head">Shipping</li>
              <li><span className="title">Address Line 1:</span> <span className="content">{props.shipping.lineOne}</span></li>
              <li><span className="title">Address Line 2:</span> <span className="content">{props.shipping.lineTwo}</span></li>
              <li><span className="title">State:</span> <span className="content">{props.shipping.state}</span></li>
              <li><span className="title">City:</span> <span className="content">{props.shipping.city}</span></li>
              <li><span className="title">Zip Code:</span> <span className="content">{props.shipping.zip}</span></li>
              <li><span className="title">Phone Number:</span> <span className="content">{props.shipping.phoneNumber}</span></li>
            </ul>
          </div>
          <a>Confirm</a>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));