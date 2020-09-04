import React from 'react';


class Booklist extends React.Component{
   
  render(){
    const  {name, email} = this.props;
    const {bookname,author}= this.props
    return(
      <div>
         <h4 className='real-name'>{name}</h4>
        <h4 className='real-name'>{email}</h4>
        <h4 className='real-name'>{bookname}</h4>
        <h4 className='real-name'>{author}</h4>
        <hr></hr>
      </div>
    )
  }
}
 
export default Booklist;