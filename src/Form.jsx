import { useState } from 'react';
import { CheckCircleOutline } from "heroicons-react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.firstName.trim()) {
      validationErrors.firstName = "This field is required";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "This field is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address";
    }

    if (!formData.queryType) {
      validationErrors.queryType = "Please select a query type";
    }

    
    if (!formData.message.trim()) {
      validationErrors.message = "This field is required";
      }
      
    if (!formData.consent) {
      validationErrors.consent = "To submit this form, please consent to being contacted";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setShowMessage(true);
    }
  };

  return (
    <>
    
      <form className="flex justify-center min-h-screen p-4 shadow-md md:items-center bg-bg_color" onSubmit={handleSubmit} autoComplete=''>
        
        <main className="w-full max-w-screen-md p-10 mx-auto bg-white rounded-2xl">
          <h2 className="py-6 mb-4 text-3xl font-semibold">Contact Us</h2>

          <div className="md:space-x-4 md:flex md:flex-row md:justify-between md:w-full">
            <section className="flex flex-col flex-wrap md:flex-1">
              <label htmlFor="firstName">First Name <span className="text-primary">*</span></label>
              <input
                type="text"
                className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span className="error_message">{errors.firstName}</span>}
            </section>

            <section className="flex flex-col flex-1">
              <label htmlFor="lastName">Last Name <span className="text-primary">*</span></label>
              <input
                type="text"
                className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
             {errors.firstName && <span className="error_message">{errors.lastName}</span>}

            </section>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="email">Email Address <span className="text-primary">*</span></label>
            <input
              type="email"
              className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error_message">{errors.email}</span>}
          </div>

            <label htmlFor="queryType">Query Type <span className="text-primary">*</span></label>
            <div className="flex flex-col justify-between w-full md:space-x-4 md:flex-row md:mt-3">

            <label className='flex-1 space-x-3 form-input has-[:checked]:bg-emerald-100'>
             <input
               type="radio"
               className="form-radio checked:bg-primary focus:bg-primary"
               name="queryType"
               value="general"
               id="general"
               checked={formData.queryType === 'general'}
               onChange={handleChange}
             />
             <span>General Enquiry</span>
           </label>

           <label className='flex-1 space-x-3 form-input has-[:checked]:bg-emerald-100'>
             <input
               type="radio"
               className="form-radio checked:bg-primary"
               name="queryType"
               value="support"
               id="support"
               checked={formData.queryType === 'support'}
               onChange={handleChange}
             />
             <span>Support Request</span>
           </label>
            </div>
            {errors.queryType && <span className="error_message">{errors.queryType}</span>}
          

          <div className="flex flex-col">
            <label htmlFor="message">Message <span className="text-primary">*</span></label>
            <textarea
              name="message"
              className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
              id="message"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error_message">{errors.message}</span>}
          </div>

          <div className='md:mb-8'>
            <input
              type="checkbox"
              className="mx-2 form-checkbox focus:ring-primary text-primary"
              name="consent"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <label htmlFor="consent" className='cursor-pointer'>I consent to being contacted by the team</label>
          </div>
            {errors.consent && <span className="error_message">{errors.consent}</span>}

          <div className='flex justify-center my-4'>
            <button type="submit" className='w-full py-4 md:mx-4 tracking-wide text-white rounded-md bg-primary hover:bg-[#044e41] transition duration-300 ease-linear'>Submit</button>
          </div>
          
        </main>
        
      </form>
      
      {showMessage && (
        <div 
          className="fixed flex items-center p-4 text-sm text-gray-100 transform -translate-x-1/2 bg-gray-800 rounded-lg top-2 left-1/2" 
          role="alert">
          <CheckCircleOutline/>
          <div>
            <h6 className='mx-3 text-xl font-semibold'>Message Sent!</h6>
            <p className='mx-3 text-gray-400'>Thanks for completing the form. We'll be in touch soon!</p>
          </div>
        </div>
      )}

    </>
  );
}

export default Form;
