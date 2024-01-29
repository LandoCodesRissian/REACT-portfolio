import React from 'react';

const AboutMe = () => {
  const aboutMeStyle = {
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    borderRadius: '8px', 
    margin: '20px', 
  };

  const headingStyle = {
    fontSize: '24px', 
    marginBottom: '10px', 
  };

  const paragraphStyle = {
    fontSize: '16px', 
    lineHeight: '1.5', // Add some line spacing for readability
  };

  return (
    <div style={aboutMeStyle}>
      <h2 style={headingStyle}>ABOUT ME</h2>
      <p style={paragraphStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis 
        aliquam. Congue quisque egestas diam in arcu. Libero enim sed faucibus turpis. Ut porttitor leo a diam. 
        Vel pretium lectus quam id leo. Dolor sit amet consectetur adipiscing elit duis tristique. Dui accumsan sit 
        amet nulla facilisi morbi tempus. Nullam non nisi est sit. Nisl vel pretium lectus quam id leo in vitae 
        turpis. Purus non enim praesent elementum. Elit pellentesque habitant morbi tristique senectus et.
      </p>
    </div>
  );
};

export default AboutMe;
