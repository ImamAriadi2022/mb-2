import React, { useState } from 'react';

function AboutForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`New About Us Entry Added: \nTitle: ${title}\nContent: ${content}`);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Add New About Us Entry</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        ></textarea>
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
}

export default AboutForm;
