import React, { useState } from 'react';

function RequestAssistance({ onSubmitRequest }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the assistance request to backend
    onSubmitRequest({ email, message });
  };

  return (
    <div className="request-assistance-container">
      <h2>Request Assistance</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default RequestAssistance;
