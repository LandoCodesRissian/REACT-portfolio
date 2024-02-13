import React from 'react';
import { FaGithub, FaLinkedin, FaReact, FaDatabase, FaLeaf, FaJsSquare, FaCss3, FaHtml5 } from 'react-icons/fa';

const Footer = () => {
  const iconStyle = {
    fontSize: '36px',
    margin: '0 10px',
  };

  const skillIconStyle = {
    fontSize: '36px',
    margin: '0 10px',
  };

  const skillColors = {
    React: 'lightblue',
    MySQL: 'lightgreen',
    MongoDB: 'green',
    JavaScript: 'yellow',
    CSS: 'orange',
    HTML: 'red',
  };

  return (
    <footer>
      <div className="icons-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="social-icons" style={{ display: 'flex', gap: '10px' }}>
          <a href="https://github.com/LandonCodesRissian" target="_blank" rel="noopener noreferrer">
            <FaGithub style={iconStyle} />
          </a>
          <a href="https://www.linkedin.com/in/landon-peterson-351b39288/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={iconStyle} />
          </a>
        </div>
        <div className="skills-icons" style={{ display: 'flex', gap: '10px' }}>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <FaReact style={{ ...skillIconStyle, color: skillColors.React}} />
          </a>
          <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">
            <FaDatabase style={{ ...skillIconStyle, color: skillColors.MySQL}} />
          </a>
          <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">
            <FaLeaf style={{ ...skillIconStyle, color: skillColors.MongoDB}} />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            <FaJsSquare style={{ ...skillIconStyle, color: skillColors.JavaScript }} />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
            <FaCss3 style={{ ...skillIconStyle, color: skillColors.CSS   }} />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
            <FaHtml5 style={{ ...skillIconStyle, color: skillColors.HTML}} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
