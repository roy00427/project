import React, { Component } from 'react';
//import{NavLink} from 'react-router-dom';
import Header from './Header';
import { Button, Jumbotron, } from 'reactstrap';


class Users extends Component {
 constructor(){
	 super();
	  this.state={
		  list:[],
		  error:null,
		  loading:false
	  }
 }
	showUserList =(data)=>{
	console.log(JSON.stringify(data),null,'\t');
	this.setState({list: data, });
		setTimeout(()=>{
	this.setState({list: data, loading:Users});
	},800)
		
}	

	componentDidMount(){
	console.log('didmount')
		this.setState({loading:true});
 let url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
	.then(response => response.json())
	.then(this.showUserList)
	.catch(error => {
	this.setState({error});
})
}	
	
userRoute = (ev) =>{
		let user= ev.target.textContent.toLowerCase();
        this.props.history.push(`/users/${user}`);
	
	}
	
render() {
   
	const USER= (this.props.match.params.user)?this.props.match.params.user:null;

	
    console.log('user')
    
return (
<div>
	
	    <header className="App">
    <h1 className="user">Users</h1> 
	     {
		 this.state.list.length === 0 &&
		 <h2 className="load">Loading Users</h2>
		 }
        <Header />
	    </header>
	 
     <ul>
		
		{
		this.state.list &&
		this.state.list.map((user)=> (
                    <li key={user.id} >
	<Jumbotron>

	<p className="name">{user.name}</p>
	
	<p className="email">{user.email }</p>
	
	<p className="button">
	<button className="p_button"><a href={"/posts/"+user.id}>Posts</a></button>
	<button className="t_button"><a href={"/todo/"+user.id}>Todo</a></button></p>
	
	</Jumbotron>
	
	</li>
                ) ) }</ul>

		
          <main className="users">
             
             { USER &&
             <h2 className={USER}> </h2>
			 }
         
         
          </main>
     
      </div>
    );
  }
}
export default Users;


