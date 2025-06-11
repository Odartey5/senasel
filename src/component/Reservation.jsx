import React, { useState } from "react";
import "./Reservation.css";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Reservation details:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "",
      specialRequests: ""
    });
  };

  return (
    <div className="reservation-container">
      <div className="reservation-content">
        <h1 className="reservation-title">Make a Reservation</h1>
        <p className="reservation-subtitle">Book your table for an unforgettable dining experience</p>
        
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="reservation-label">
              Full Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nana Akwasi"
              />
            </label>
          </div>

          <div className="form-group">
            <label className="reservation-label">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="joosephntim@gmail.com"
              />
            </label>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="reservation-label">
                Date
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </label>
            </div>

            <div className="form-group">
              <label className="reservation-label">
                Time
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="reservation-label">
              Number of Guests
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              >
                <option value="">Select number of guests</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-group">
            <label className="reservation-label">
              Special Requests
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Any dietary requirements or special occasions?"
                rows="4"
              />
            </label>
          </div>

          <button className="reservation-button" type="submit">
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;