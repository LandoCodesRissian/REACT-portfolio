import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage submission message visibility
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Reset form fields by setting formData back to initial state
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Set submission message
    setSubmissionMessage(`Thanks ${formData.name}, I will get back to you when I have some time and we can discuss your project!`);

    //remove the message after a few seconds
    setTimeout(() => {
      setSubmissionMessage('');
    }, 5000); // Message disappears after 5 seconds
  };

  // Inline CSS styles
  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // This centers the child elements (form and message)
        justifyContent: 'center',
        padding: '20px',
      },
    title: {
        
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      padding: '20px',
      border: '1px solid #a855f7',
      borderRadius: '8px',
    },
    label: {
      marginBottom: '5px',
      marginTop: '10px',
    },
    input: {
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '4px',
      border: '1px solid #a855f7',
    },
    textarea: {
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #a855f7',
      minHeight: '100px',
      marginBottom: '10px',
    },
    button: {
      padding: '10px 20px',
      cursor: 'pointer',
      borderRadius: '4px',
      border: '1px solid #a855f7',
    },
  };

  return (
    <div style={styles.container}>
        <div style={styles.title}>Contact me!</div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="message" style={styles.label}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {submissionMessage && <div style={styles.message}>{submissionMessage}</div>}
    </div>
  );
}
export default ContactForm;
