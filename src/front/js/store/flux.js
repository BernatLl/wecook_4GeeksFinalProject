const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			course: [],
			student: [],
			chef: []

		},
		actions: {
			loadCourses: () => {
				fetch("https://3001-bernatll-proyectofinal4g-uson41704j4.ws-eu34xl.gitpod.io/api/course")
					.then(response => response.json())
					.then(data => setStore({ course: data.results}))
					.catch(error => console.error(error));
			},
			loadChefs: ()=>{
				fetch("https://3001-bernatll-proyectofinal4g-uson41704j4.ws-eu34xl.gitpod.io/api/chef")
					.then(response => response.json())
					.then(data => setStore({ chef: data.results}))
					.catch(error => console.error(error));
			},
			loadStudents: ()=>{
				fetch("https://3001-bernatll-proyectofinal4g-uson41704j4.ws-eu34xl.gitpod.io/api/student")
				.then(response => response.json())
				.then(data => setStore({ student: data.results}))
				.catch(error => console.error(error));
			},

			login: (email, password) =>{
				fetch('postgresql://gitpod@localhost:3001/login', {
				 method: 'POST',
				 headers: {
				 	'Content-type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({email: email, password: password})
				}).then((res)=> res.json())
				.then((data) => {
					localStorage.setItem('token', data.token);
				}).catch((err)=>	console.error(err)) 
			},

			

			getMessage: function () {
				// fetching data from the backend
				fetch('postgresql://gitpod@localhost:3001/me', {
					method: 'GET',
					headers: {
						'Accept': 'application/json',
						'Authorization': `Bearer ${localStorage.getItem('token')}`
					},
				}).then((res) => res.json())
					.then((data) => {
						console.log(data);
				}).catch((err) => console.error(err));
			},
		}
	};
};

export default getState;
