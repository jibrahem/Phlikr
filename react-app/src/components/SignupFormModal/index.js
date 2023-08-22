import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [age, setAge] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	// const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password, first_name, last_name, age));
			// console.log("data", data)
		// 	if (data) {
		// 		setErrors(data);
		// 	} else {
		// 		closeModal();
		// 	}
		// } else {
		// 	setErrors([
		// 		"Confirm Password field must be the same as the Password field",
		// 	]);
		// }
		
	};

	return (
		<>
			<div className="loggin">
				<form onSubmit={handleSubmit}>
					<h3>Sign up for Snapr</h3>
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
							className="login-modal"
							type="email"
							placeholder="Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</label>
					<label>
						<input
							className="login-modal"
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</label>
					<label>
						<input
							className="login-modal"
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</label>
					{/* <label>
						<input
							className="login-modal"
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
				</form>
			</div>
		</>
	);
}

export default SignupFormModal;
