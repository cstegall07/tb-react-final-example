import {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
    const[input, setInput] = useState({});
    const[contact, setContact] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    };


    const handleFormSubmitEvent = (e) => {
        e.preventDefault();
        const contactName = input.tbName;
        const contactEmail = input.tbEmail;
        const contactPhone = input.tbPhone;
        setContact({
            name: contactName,
            email: contactEmail,
            phone: contactPhone
        });
        
        setInput({});
    };

    useEffect(() => {
        if (contact.name !== undefined) {
          let message = `The contact named ${contact.name} with email (${contact.email}) and the phone number (${contact.phone}) was submitted`;
          alert(message);
        }
      }, [contact]);
    

      return (
        <>
          <h1>Contact Me</h1>
          <form onSubmit={handleFormSubmitEvent}>
            <div className="mb-3 mt-3">
              <label htmlFor="tbName" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                placeholder="Enter Contact's Name"
                name="tbName"
                type="text"
                value={input.tbName || ""}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="tbEmail" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                placeholder="Enter Contact's Email"
                name="tbEmail"
                type="email"
                value={input.tbEmail || ""}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="tbPhone" className="form-label">
                Phone
              </label>
              <input
                className="form-control"
                placeholder="Enter Contact's Phone #"
                name="tbPhone"
                type="number"
                value={input.tbPhone || ""}
                onChange={handleChange}
                required
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </>
      );
  };
  
  export default Contact;