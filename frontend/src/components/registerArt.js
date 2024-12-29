import React, { useState } from 'react';

function RegisterArt() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [skills, setSkills] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !age || !skills || !location || !experience) {
      alert('Please fill in all fields!');
      return;
    }

    const formData = {
      name,
      age,
      skills,
      location,
      experience,
    };

    try {
      // Simulating API call to backend
      const response = await fetch('/api/register-art', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Registration successful!');
        setName('');
        setAge('');
        setSkills('');
        setLocation('');
        setExperience('');
      } else {
        setMessage('Failed to register. Please try again.');
      }
    } catch (error) {
      setMessage('Error: Unable to connect to server.');
    }
  };

  return (
    <div>
      <h2>Register ART</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            required
          />
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <textarea
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="List of skills (e.g., cooking, cleaning, babysitting)"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Current Location"
            required
          />
        </div>
        <div>
          <label htmlFor="experience">Experience (Years):</label>
          <input
            type="number"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Years of Experience"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RegisterArt;
