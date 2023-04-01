import { useEffect, useState } from "react";



import "./submission.css";

export function Submission() {
  const [books, setBooks] = useState(() => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });
  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  
  

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, formData]);
    setFormData({});
    window.location.href = '/';
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFormData({ ...formData, image: reader.result });
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const timestamp = new Date().getTime();
    setFormData({...formData,time:timestamp})
    localStorage.setItem("books", JSON.stringify(books));
    
  }, [books]);

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <p className="title">New Hackathon Submission</p>
          

          <label htmlFor="title">Title</label>
          <input
           type="text"
           id="title"
           name="title"
           placeholder="Title of your submission"
           value={formData.title}
           onChange={handleInputChange}
           required
         />
          
          <label htmlFor="summary">Summary</label>
          <input
           type="text"
           id="summary"
           name="summary"
           placeholder="A short summary of your submission (this will be visible with your submission)"
           value={formData.summary}
           onChange={handleInputChange}
           required
         />

          <label htmlFor="description">Description</label>
          <textarea
          id="description"
          name="description"
          style={{fontFamily:"sans-serif"}}
          placeholder="Write a long description of your project. You can describe your idea and approach here"
          value={formData.description}
          onChange={handleInputChange}
          rows="5"
          required
          ></textarea>

          

<label htmlFor="coverImage">Cover Image</label>
          <div style={{border:"1px dashed gray", padding:"10px",width:"700px",borderRadius:"20px"}}>

          <input
          type="file"
          accept="image/*"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleFileInputChange}
          required
         />
          
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="image-preview"
            />
          )}
          
          </div>

          <label htmlFor="hackathonName" style={{marginTop:"20px"}}>Hackathon Name</label>
      <input
        type="text"
        id="hackathonName"
        name="hackathonName"
        placeholder="Enter the name of the hackothon"
        value={formData.hackathonName}
        onChange={handleInputChange}
        required
      />

      <div style={{display:"flex",justifyContent:"space-between",width:"700px"}}>
      <label htmlFor="startDate">Hackathon Start Date</label>
      <label htmlFor="endDate" style={{marginRight:"130px"}}>Hackathon End Date</label>
      </div>

    <div style={{display:"flex",justifyContent:"space-between",width:"700px"}}>

      <input
        type="date"
        id="startDate"
        name="startDate"
        placeholder="Select start date"
        className="date"
        value={formData.startDate}
        onChange={handleInputChange}
        required
      />

      
      <input
        type="date"
        id="endDate"
        className="date"
        placeholder="Select end date"
        name="endDate"
        value={formData.endDate}
        onChange={handleInputChange}
        required
      />

</div>

      <label htmlFor="githubLink">GitHub Repository Link</label>
      <input
        type="url"
        id="githubLink"
        name="githubLink"
        placeholder="Enter your submission public Github repositry link"
        value={formData.githubLink}
        onChange={handleInputChange}
        required
      />

      
        <label htmlFor="otherLinks">Other Links</label>
        <input
          type="url"
          id="otherLinks"
          name="otherLinks"
          placeholder="You can upload a video demo or URL of you demo app here"
          value={formData.otherLinks}
          onChange={handleInputChange}
        />
      


          <button type="submit">
            Upload Submission
          </button>
          
        </form>
      </div>
    </>
  );
}