import React, { useState } from 'react';
import './Card.css';

function StudentInfo() {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    course: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Info:\nName: ${student.name}\nAge: ${student.age}\nCourse: ${student.course}`);
  };

  return (
    <div className="card">
      <h2 style={{ color: '#264653', marginBottom: 16 }}>Student Info</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          required
          style={{
            padding: '8px',
            borderRadius: 4,
            border: '1px solid #ccc',
            fontSize: 16
          }}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          required
          style={{
            padding: '8px',
            borderRadius: 4,
            border: '1px solid #ccc',
            fontSize: 16
          }}
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
          required
          style={{
            padding: '8px',
            borderRadius: 4,
            border: '1px solid #ccc',
            fontSize: 16
          }}
        />
        <button
          type="submit"
          style={{
            background: '#2a9d8f',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            padding: '10px 0',
            fontSize: 16,
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudentInfo;