import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import './SignupForm.css';
import { Link } from "react-router-dom";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (password === confirmPassword) {
        const data = await dispatch(signUp(username, email, password, first_name, last_name, age));
        console.log("data", data)
    //     if (data) {
    //       setErrors(data)
    //     }
    // } else {
    //     setErrors(['Confirm Password field must be the same as the Password field']);
    // }
    
  };

  return (
    <>
    <div className="login-box">
      <div className="loggin">
        <img className="login-background-image" src={"https://identity.flickr.com/img/033120190455-by-Henry.2edde7a9.jpg"} alt="Background Image"/>
        <div className="form-container-signup">
        <form className='login-form' onSubmit={handleSubmit}>
          <div>🔵🔴</div>
          <div className="form-text">Sign up for Snapr</div>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            <input
              type="text"
              placeholder="First name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Last name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="number"
              placeholder="Your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min={1}
              required
            />
          </label>
          <label>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {/* <label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label> */}
          <div className="login">
            <button type="submit">Sign Up</button>
          </div>
          <div className="login2">Already a Snapr member? <Link to='/login'>
            Log in here.
          </Link>
          </div>
        </form>
        </div>
        </div>
      </div>
    </>
  );
}

export default SignupFormPage;
