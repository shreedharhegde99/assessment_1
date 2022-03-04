import React, { Fragment, useEffect, useState } from "react";
import "./dashboard.css";
import userData from "./data.json";

function Dashboard() {
	const [data, setData] = useState([]);
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [profile, setProfile] = useState("");
	// setting initial data
	useEffect(() => {
		setData(userData);
	}, []);

	// filtering id
	useEffect(() => {
		const filter = userData.filter((item) => item.id==Number(id));

		setData(filter);
	}, [id]);

	// filtering name

	useEffect(() => {
		const filter = userData.filter((item) => item.name.toLowerCase().includes(name));

		setData(filter);
	}, [name]);

	// filtering email

	useEffect(() => {
		const filter = userData.filter((item) =>
			item.email.toLowerCase().includes(email)
		);

		setData(filter);
	}, [email]);

	// filtering work_profile

	useEffect(() => {
		const filter = userData.filter((item) =>
			item.work_profile.toLowerCase().includes(profile)
		);

		setData(filter);
	}, [profile]);

	/* id , name,email,work_profile */

	// console.table(userData)

	return (
    <Fragment>

			<div className="header">
				<div>App Ringer Dashboard</div>
			</div>
          <div className="dashboard">
			<div>
				<div>
					<select>
						<option value="id">Id</option>
					</select>

					<input
						type="text"
						value={id}
						onChange={(e) => setId(e.target.value)}
            />
				</div>
				<div>
					<select>
						<option value="name">Name</option>
					</select>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
            />
				</div>
				<div>
					<select>
						<option value="email">Email</option>
					</select>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
            />
				</div>
				<div>
					<select>
						<option value="work_profile">Work Profile</option>
					</select>
					<input
						type="text"
						value={profile}
						onChange={(e) => setProfile(e.target.value)}
            />
				</div>
			</div>
			<div>
				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Email</th>
							<th>Work Profile</th>
						</tr>
					</thead>
					<tbody>
						{data &&
							data.map((item, i) => {
								return (
									<tr key={i}>
                    <td>{item.id}</td>
										<td>{item.name}</td>
										<td>{item.email}</td>
										<td>{item.work_profile}</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
    </div>
		</Fragment>
	);
}

export default Dashboard;
