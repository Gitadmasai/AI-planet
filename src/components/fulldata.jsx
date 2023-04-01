
import {  useParams } from "react-router-dom";
import "./fulldata.css"




export function Fulldata() {
  const { time } = useParams();
  const books = JSON.parse(localStorage.getItem("books")) || [];

  
  


  
  
  const book = books.find((book) => book.time == time);
  const bookIndex = books.findIndex((book) => book.time == time);

  const handleDelete = () => {
    if (bookIndex !== -1) {
      const updatedBooks = [...books.slice(0, bookIndex), ...books.slice(bookIndex + 1)];
      localStorage.setItem("books", JSON.stringify(updatedBooks));
      // redirect to home page
      window.location.href = "/";
    }
  };



  //favourite page...........


  
  
  

  

 

  return (
    <div>
      <div style={{display:"flex",width:"100%",height:"450px",backgroundColor:"rgb(6,59,83)"}}>
        <div className="img-div" style={{width:"70%"}}>
            <div className="img1" style={{display:"flex"}}>
                <div>
                <img src={book.image}/>
                </div>
                <div>
                <p style={{margin:"130px 0 0 50px",color:"white",fontFamily:"sans-serif",fontSize:"50px"}}>{book.title}</p>
                </div>
            </div>
            <div>
                
                <p style={{color:"white",fontSize:"20px",margin:"20px 0 0 150px"}}>{book.summary}</p>


                <button className="fav-but" >Add Favourite</button>

            </div>
        </div>


        <div className="but" style={{width:"30%"}}>
        <button className="but1" onClick={handleDelete}>Delete</button>
        <br></br>
        <button className="but2" >Edit</button>
        </div>
      </div>



      <div className="down-head">
        <div className="desc-box">
            <label>Description</label>
            <p>{book.description}</p>
        </div>
        <div className="url-box">
            <h2>Hackathon</h2>
            <p>{book.hackathonName}</p>
            <br></br>
            <h3>Date: {book.startDate} - {book.endDate}</h3>
            <button style={{width:"200px",height:"40px",borderRadius:"10px",border:"1px solid gray",margin:"20px 0 0 20px"}}><a style={{textDecoration:"none",fontSize:"15px",color:"gray"}} href={book.githubLink}>Github Repository</a></button>
            <br></br>
            <button style={{width:"200px",height:"40px",borderRadius:"10px",border:"1px solid gray",margin:"20px 0 0 20px"}}><a  style={{textDecoration:"none",fontSize:"15px",color:"gray"}} href={book.otherLinks}>Other Link</a></button>
        </div>
      </div>
      
    </div>
  );
}
