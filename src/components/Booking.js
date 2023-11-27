import React, { useState } from "react";
import "./Booking.css";

export default function Booking() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    time: "17:00",
    people: 2,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `
      Your reservation for ${inputs.people} people on
      ${inputs.date} at ${inputs.time}
      has been confirmed.

      An e-mail has been sent to:
      ${inputs.email}.

      Reserved for:
      ${inputs.name}${inputs.number ? `, phone number ${inputs.number}` : ""}
      `
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="booking-container">
      <h2 className="sub-title">Reservations</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label className="form-label booking-details">
          Date of arrival
          <input
            className="form-input booking-input"
            id="date"
            name="date"
            value={inputs.date || ""}
            type="date"
            required
            onChange={handleChange}
          />
        </label>

        <label className="form-label booking-details">
          Time of arrival
          <select
            className="form-input booking-input"
            id="time"
            name="time"
            value={inputs.time || ""}
            required
            onChange={handleChange}
          >
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
          </select>
        </label>

        <label className="form-label booking-details">
          Number of guests
          <input
            className="form-input booking-input"
            type="number"
            id="people"
            name="people"
            value={inputs.people || ""}
            max={10}
            min={2}
            required
            onChange={handleChange}
          />
        </label>
        <label className="form-label personal-details">
          <input
            className="form-input personal-input"
            placeholder="Full name"
            type="text"
            id="name"
            name="name"
            value={inputs.name || ""}
            required
            onChange={handleChange}
          />
        </label>
        <label className="form-label personal-details">
          <input
            className="form-input personal-input"
            placeholder="E-mail address"
            type="email"
            id="email"
            name="email"
            value={inputs.email || ""}
            required
            onChange={handleChange}
          />
        </label>
        <label className="form-label personal-details">
          <input
            className="form-input personal-input"
            placeholder="(+44) XXX XX XXX"
            type="text"
            id="number"
            name="number"
            value={inputs.number || ""}
            onChange={handleChange}
          />
        </label>
        <button className="button-secondary" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
