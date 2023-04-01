import img1 from "./images/Img1.png"
import { Link } from "react-router-dom"


export function Navbar(){
    
    return(
        <>
        <div style={{width:"100%",height:"9vh"}}>
           <Link to="/"> <img src={img1} alt="logo" style={{margin:"10px 10px 10px 150px",cursor:"pointer"}}/></Link>
        </div>
        
        </>
    )
}