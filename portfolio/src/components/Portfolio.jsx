import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    // getting my github repositories
    fetch('https://api.github.com/users/LandonP172/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="github-projects">
        <style>
        {`
      .github-projects {
        text-align: center;
      }
  
      .repo-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
  
      .repo-item {
        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        text-align: center;
        flex: 0 0 calc(33.33% - 20px); /* Arrange in 3 columns */
        max-width: calc(33.33% - 20px); 
      }
  
      .repo-item img {
        max-width: 100px; 
        height: auto;
      }
        `}
      </style>
      <h2>My GitHub Projects</h2>
      <div className="repo-list">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-item">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <img src={repo.owner.avatar_url} alt={repo.name} />
            </a>
            <p>
              <strong>{repo.name}</strong>
              <br />
              {repo.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
