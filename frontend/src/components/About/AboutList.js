import React from 'react';

function AboutList() {
  const aboutEntries = [
    { id: 1, title: "Our Mission", content: "To deliver quality services to our customers." },
    { id: 2, title: "Our Vision", content: "To be the leading company in our field." },
  ];

  return (
    <div>
      <h2>About Us List</h2>
      <ul>
        {aboutEntries.map((entry) => (
          <li key={entry.id}>
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutList;
