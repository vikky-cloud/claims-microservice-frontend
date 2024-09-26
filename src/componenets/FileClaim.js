import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FileClaim = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    mobileNo: '',
    emailId: '',
    carLicenseNumber: '',
    dateOfAccident: '',
    firAcknowledgeNumber: '',
    placeOfAccident: '',
    descriptionOfAccident: '',
  });

  const history = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to submit the claim
    // For now, we'll just simulate a successful submission
    alert('Claim received successfully!');
    history.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">File a Claim</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">Please fill out the form below to file your claim.</p>
              </div>
            </div>
            <form className="divide-y divide-gray-200" onSubmit={handleSubmit}>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {Object.keys(formData).map((key) => (
                  <div className="flex flex-col" key={key}>
                    <label className="leading-loose">{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</label>
                    <input
                      type={key === 'dateOfAccident' ? 'date' : 'text'}
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder={key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                      required
                    />
                  </div>
                ))}
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create Claim</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileClaim;