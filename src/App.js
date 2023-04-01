import {  Route, Routes } from "react-router-dom";
import {Navbar} from "./components/navbar";
import {Header} from "./components/header";
import {Searchbar} from "./components/search";
import {Submission} from "./components/submission";
import {SubmissionDetail} from "./components/submissiondetail";
import { Fulldata } from "./components/fulldata";



function App() {

  



  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={[<Header/>,<Searchbar />,<SubmissionDetail  />]}> </Route>
        <Route path="/submission" element={<Submission/>}></Route>
        <Route path="/submissiondetail" element={[<Header/>,<Searchbar />,<SubmissionDetail  />]}></Route>
        <Route path="/fulldata/:time" element={<Fulldata/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
