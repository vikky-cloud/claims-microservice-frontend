import React from 'react';

function ClaimResult({ isValid, onRequestAssistance }) {
  return (
    <div className="claim-result-container">
      {isValid ? (
        <div>
          <h2>Your claim has been submitted successfully!</h2>
          <p>We are processing your claim. You will be notified shortly.</p>
        </div>
      ) : (
        <div>
          <h2>Claim Validation Failed</h2>
          <p>Your claim could not be validated. Please request assistance, and we'll reach out to help.</p>
          <button onClick={onRequestAssistance}>Request Assistance</button>
        </div>
      )}
    </div>
  );
}

export default ClaimResult;
