import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './OnlineBooking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    phone: '',
    location: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4kv6vrx', 'template_dvk2sti', e.target, 'yg5IYP5JVkfgJZHA0')
      .then((result) => {
        console.log(result.text);
        alert('Booking request sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send booking request.');
      });

    setFormData({
      name: '',
      email: '',
      service: '',
      phone: '',
      location: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <div className="booking-container">
      <h1>Online Booking</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Service:</label>
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="" disabled>Select a service</option>
            <option value="Architectural & structural drawings">Architectural & structural drawings</option>
            <option value="Bill of Quantities">Bill of Quantities</option>
            <option value="Approvals facilitation">Approvals facilitation</option>
            <option value="Interior design">Interior design</option>
            <option value="Design and build services">Design and build services</option>
            <option value="Renovation works">Renovation works</option>
          </select>
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Booking;
