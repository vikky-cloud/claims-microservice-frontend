import React, { useState } from 'react';

function ClaimForm({ onSubmitClaim }) {
  const [policyNumber, setPolicyNumber] = useState('');
  const [incidentDate, setIncidentDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect and send claim data
    const claimData = {
      policyNumber,
      incidentDate,
      description,
    };
    onSubmitClaim(claimData);
  };

  return (
    <div className="claim-form-container">
      <h2>File a Claim</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Policy Number:</label>
          <input
            type="text"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Incident Date:</label>
          <input
            type="date"
            value={incidentDate}
            onChange={(e) => setIncidentDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Incident Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Claim</button>
      </form>
    </div>
  );
}

export default ClaimForm;
