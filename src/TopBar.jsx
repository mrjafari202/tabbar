import React, { useState } from 'react';  

const languages = [  
  { name: 'JavaScript',id:1, description: 'JavaScript is a versatile programming language primarily used for web development.' },  
  { name: 'Python',id:2, description: 'Python is a popular programming language known for its simplicity and readability.' },  
  { name: 'Java',id:3, description: 'Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.' },  
];  

const TopBar = () => {  
  
  const storedLanguage = localStorage.getItem('selectedLanguage');  
  const initialLanguage = storedLanguage ? JSON.parse(storedLanguage) : languages[0];  
  
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);  


  const handleLanguageChange = (language) => {  
    setSelectedLanguage(language);  
    localStorage.setItem('selectedLanguage', JSON.stringify(language));  
  };  

  return (  
    <div>  
      <h1>Programming Languages</h1>  
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>  
        {languages.map((language) => (  
          <li key={language.id} style={{ margin: '0 10px' }}>  
            <button onClick={() => handleLanguageChange(language)}>{language.name}</button>  
          </li>  
        ))}  
      </ul>  

      <h2>{selectedLanguage.name}</h2>  
      <p>{selectedLanguage.description}</p>  
    </div>  
  );  
};  


export default TopBar;




