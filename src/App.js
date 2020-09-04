import React from 'react';
import './App.css';
import Booklist from './component/BookList';
import Book from './component/Book';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      name: '',
      email: '',
      bookname:'',
      author:'',
      users: []
    }
  }
  
  handlgeInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value
    const bookname = e.target.book
    const author =e.target.author
    this.setState({
      [name]: value,
      [bookname]: author  
    });
  }
  
  handleSubmit = (e) =>{
    e.preventDefault();
    const user = this.state
    let newUser = {name: user.name, email: user.email,bookname:user.bookname,author:user.author}
    this.setState({users:[...user.users, newUser]})
   
    
  }
  

  render() {
    const change = this.handlgeInputChange;
    const users = this.state.users
    return (
      <div>
       <Book/>
      <div className="App">
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
         
            <input  
             type="text"
             name='name' 
             placeholder="Name" 
             value={this.state.name} 
             onChange={change}/>
            <br />
            <p></p>
            <input 
              type="email" 
              name='email'
              placeholder="Email" 
              value={this.state.email} 
              onChange={change}/>
            <br />
            <p></p>
            <input  
             type="text"
             name='bookname' 
             placeholder="BookTitle" 
             value={this.state.bookname} 
             onChange={change}/>
            <br />
            <p></p>
            <input  
             type="text"
             name='author' 
             placeholder="Author" 
             value={this.state.author} 
             onChange={change}/>
              <br />
              <p></p>
            <input className='submit' type="submit" />
          </form>
        </div>

       
        <div className='list-of-users'>
          <h3 className="text">BOOKS AND AUTHORS</h3>
          {
            users.map((user, i) => <Booklist key={i} {...user}/>)
          }
        </div>
      </div>
      </div>
    );
  }
}
 
export default App;
