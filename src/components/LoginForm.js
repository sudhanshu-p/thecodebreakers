import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div class="container">
      <form onSubmit={submitHandler}>
        <div class="background-img">
          <div class="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <div className="form-inner">
              <div class="content">
                <div className="header">
                  <h1>Login</h1>
                </div>

                {error != "" ? <div className="error">{error}</div> : ""}
                
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    className="name1"
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                    value={details.mail}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) =>
                      setDetails({ ...details, password: e.target.value })
                    }
                    value={details.password}
                  />
                </div>


                <div className="abc">
                  <button className="btn-change3">{"LOGIN"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
