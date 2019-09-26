import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input onSubmit={this.setState({username: event.target.value})} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onSubmit={this.setState({password: event.target.value}) id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
