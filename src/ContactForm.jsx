import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h1 className="mb-6 text-2xl font-bold">Contact Us</h1>
        
        <div className="flex flex-col mb-4">
          <label htmlFor="firstName" className="mb-2">First Name *</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            className="p-2 border border-gray-300 rounded" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="lastName" className="mb-2">Last Name *</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            className="p-2 border border-gray-300 rounded" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="p-2 border border-gray-300 rounded" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="flex flex-col mb-4">
          <div className="flex">
          <p htmlFor="queryType">Query Type</p> <span className="mb-2">*</span>
            <label className="flex items-center mr-4">
              <input 
                type="radio" 
                name="queryType" 
                value="General Enquiry" 
                className="mr-2" 
                checked={formData.queryType === 'General Enquiry'} 
                onChange={handleChange} 
                required 
              />
              General Enquiry
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="queryType" 
                value="Support Request" 
                className="mr-2" 
                checked={formData.queryType === 'Support Request'} 
                onChange={handleChange} 
                required 
              />
              Support Request
            </label>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="mb-2">Message *</label>
          <textarea 
            id="message" 
            name="message" 
            className="p-2 border border-gray-300 rounded" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>
        </div>

        <div className="flex items-center mb-4">
          <input 
            type="checkbox" 
            id="consent" 
            name="consent" 
            className="mr-2" 
            checked={formData.consent} 
            onChange={handleChange} 
            required 
          />
          <label htmlFor="consent">I consent to being contacted by the team *</label>
        </div>

        <button type="submit" className="p-2 text-white bg-green-600 rounded hover:bg-green-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
