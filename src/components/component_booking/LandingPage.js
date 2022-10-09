import React from "react"; //optional

function LandingPage (props) {
  return (
<div className="landing-page">
{props.message}
</div>
  );
};
export default LandingPage;