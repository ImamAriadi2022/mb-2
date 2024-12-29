import React from 'react';

function ArticleList() {
  const articles = [
    { id: 1, title: "React Basics", author: "John Doe" },
    { id: 2, title: "Understanding State", author: "Jane Smith" },
  ];

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>Author: {article.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
