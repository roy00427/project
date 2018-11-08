import React, { Component } from 'react';
import Header from './Header';


class Posts extends Component {
  constructor(){
	 super();
	  this.state={
		  list:[],
		  error:null
	  }
  }
	
showList =(data)=>{
	console.log(data)
	setTimeout(()=>{
	this.setState({list: data, loading:Posts});
	},800)
}	
	
componentDidMount(){
	console.log('didmount')
 let url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
	.then(response => response.json())
	.then(this.showList)
	.catch(error => {
	this.setState({error});
})
}	
postRoute = (ev) =>{
		let user= ev.target.textContent.toLoCase();
        this.props.history.push(`/users/${user}`);
	}
		
render() {
	
		console.log('render')
    return (
      <div>
     <header className="App">
		<h1>Posts</h1>
		{
		this.state.list.length === 0 &&
		<h2>Loading Posts</h2>
		}
		<Header />
	 </header>
		<ul>
		
		
		{
		this.state.list.length > 0 &&
		this.state.list.map( (post) => (
	         <li key={post.id} id={post.id}>{post.title+ "" + post.body}</li>
	          ))
		 }
		</ul>
		{this.state.error &&
		<h3>{this.state.error}</h3>
		}
      </div>
		
    );
  }
}
export default Posts;



