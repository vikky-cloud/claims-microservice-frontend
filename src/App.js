import React, { useState } from 'react';
import Login from './componenets/Login';
import ClaimForm from './componenets/ClaimForm';
import ClaimResult from './componenets/ClaimResult';
import RequestAssistance from './componenets/RequestAssistance';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [claimSubmitted, setClaimSubmitted] = useState(false);
  const [claimValid, setClaimValid] = useState(null);
  const [requestAssistance, setRequestAssistance] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSubmitClaim = (claimData) => {
    // Fake validation logic (later replace with API call)
    const isValid = claimData.policyNumber === "12345"; // mock validation
    setClaimValid(isValid);
    setClaimSubmitted(true);
  };

  const handleRequestAssistance = () => {
    setRequestAssistance(true);
  };

  const handleSubmitRequest = (requestData) => {
    // Log the request and reset form (replace with backend API)
    console.log("Request Assistance Submitted:", requestData);
    setRequestAssistance(false);
    alert('Your request has been submitted. We will contact you shortly.');
  };

  return (
    <div className="App">
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && !claimSubmitted && <ClaimForm onSubmitClaim={handleSubmitClaim} />}
      {isLoggedIn && claimSubmitted && !requestAssistance && (
        <ClaimResult isValid={claimValid} onRequestAssistance={handleRequestAssistance} />
      )}
      {isLoggedIn && requestAssistance && <RequestAssistance onSubmitRequest={handleSubmitRequest} />}
    </div>
  );
}

export default App;
