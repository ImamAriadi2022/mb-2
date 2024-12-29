import React, { useState } from 'react';

function ArticleForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`New Article Added: \nTitle: ${title}\nAuthor: ${author}`);
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>Add New Article</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          required 
        />
        <button type="submit">Add Article</button>
      </form>
    </div>
  );
}

export default ArticleForm;
