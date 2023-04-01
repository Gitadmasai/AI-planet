
import "./submissiondetail.css"
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from "react";
import { Link } from "react-router-dom";

export function SubmissionDetail() {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  const [message,setmessage]=useState("")
  const [sortedBooks, setSortedBooks] = useState(books);
  

  

  const  handlechange = (e)=>{
    setmessage(e.target.value)
  }

  

  const handleSort = (e) => {
    if (e.target.value === "new") {
      const sorted = [...books].sort((a, b) => Number(b.time) - Number(a.time));
      setSortedBooks(sorted);
    } else if (e.target.value === "old") {
      const sorted = [...books].sort((a, b) => Number(a.time) - Number(b.time));
      setSortedBooks(sorted);
    } else {
      setSortedBooks([...books]);
    }
  };


  


  const filteredBooks = sortedBooks.filter((book) => {
    const title = book.title.toLowerCase();
    const search = message.toLowerCase();
    return title.includes(search);
  });





  return (
    <>
       <div className='input-div' style={{display:"flex",justifyContent:"space-around",marginLeft:"750px",marginTop:"-100px"}}>
          
          <TextField
      type="search"
      className="input-field"
    
      placeholder="Search"
      style={{marginTop:'25px',width:'400px'}}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onChange={handlechange}
      />
              <select onChange={handleSort} placeholder='Sort' className='select-field' style={{width:"100px",height:"55px",marginTop:"25px",marginRight:"40px"}}>
                  <option value="">Sort</option>
                  <option value="new">Newest</option>
                  <option value="old">Oldest</option>
              </select>
              
          </div>
          





      <div className="cant">
     
        {filteredBooks.map((book, index) => (
          <Link to={`/fulldata/${book.time}`} className="submission-row" key={index} >
            <div style={{display:"flex",width:"350px",justifyContent:"space-around"}}>
              <div className="submission-image">
                <img src={book.image} alt={book.title} />
              </div>
              <div className="submission-title">
                <p style={{fontSize:"25px",marginTop:"40px",marginRight:"40px",fontFamily:'sans-serif',color:"black"}}>{book.title}</p>
              </div>
            </div>
            <div className="submission-summary">
              <p style={{fontSize:"20px",fontFamily:'sans-serif'}}>{book.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
