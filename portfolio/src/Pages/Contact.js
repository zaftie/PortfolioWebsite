import React, {useState} from 'react';
import BasicExample from '../Components/NavScrollExample';
import '../Styling/Content.css';
function Contact(){
    const [formData, setFormData] = useState({

        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
  return (<div>
            <BasicExample/>
            <div className='content' >
             <h1 style={{ textAlign: 'center', color: 'white' }}> Contact</h1>
            <form onSubmit={handleSubmit} className="center">
            <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br></br>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br></br>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <br></br>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <br></br>
        <button type="submit">Submit</button>  
            </form>
            </div>
    </div>);
}

// Other page components...

export default Contact;