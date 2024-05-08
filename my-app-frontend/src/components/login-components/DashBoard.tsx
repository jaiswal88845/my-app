import Authuser from "../../services/AuthUser";

const Dashboard = () => {

  const {username} = Authuser();


	return ( 
		<div className="d-flex justify-content-center align-items-center vh-100"> 
			<div className="border rounded-lg p-4" > 
				<h2 className="mb-4 text-center">Welcome to Dashboard</h2> 
				<p className="mb-4 text-center">Hello, {username}!</p> 
				<p className="text-center">You are logged in successfully.</p> 
				
			</div> 
		</div> 
	); 
} 

export default Dashboard; 
