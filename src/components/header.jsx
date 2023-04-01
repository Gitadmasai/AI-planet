

import img2 from "./images/Img2.png"
import { Link } from "react-router-dom"



// css add start ............

 const box={
        margin:"60px 0 0 150px",
        padding: "10px",
        backgroundColor:"green",
        border:"none",
        color:"white",
        width:"200px",
        height:"50px",
        borderRadius:"10px",
        fontSize:"18px",
        cursor: 'pointer'
        
 }


 const imgs={height:"300px",
 margin:"80px 40px 40px 150px"
}

const H1={
color:"white",
margin:"100px 0 0 150px",
fontFamily:"sans-serif",
fontSize:"40px"
}

const P={color:"white", 
margin:"40px 0 0 150px",
fontFamily:"sans-serif",
fontSize:"20px"}







 
 export function Header(){
    
    


    return(
        <>
        <div style={{display:"flex",width:"100%",height:"450px",backgroundColor:"rgb(6,59,83)"}}>
            <div style={{width:"70%"}}>
                <h1 style={H1}>Hackathon Submissions</h1>
                <p style={P}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur consectetur metus, vitae sagittis mauris sagittis id. Quisque tortor nisi, condimentum et vestibulum vitae, aliquet ut sem. Phasellus id faucibus lacus. Pellentesque ligula diam</p>
               <Link to="/submission"><button style={box}>Upload Submission</button></Link>
            </div>
            <div style={{width:"30%"}}>
                <img src={img2} alt="light" style={imgs}/>
            </div>
        </div>
        
        </>
    )
  }