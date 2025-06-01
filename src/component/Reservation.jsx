





// export default function Reservation() {
//   return (
//     <div>
//       <h2>Reservation</h2>
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" required />
//         </label>
//         <br />
//         <label>
//           Date:
//           <input type="date" name="date" required />
//         </label>
//         <br />
//         <label>
//           Time:
//           <input type="time" name="time" required />
//         </label>
//         <br />
//         <label>
//           Number of Guests:
//           <input type="number" name="guests" min="1" required />
//         </label>
//         <br />
//         <button type="submit">Reserve</button>
//       </form>
//     </div>
//   );
// }


import React, { Component } from "react";
import "./Reservation.css";

class Reservation extends Component {
  render() {
    return (
      <div className="reservation-container">
        <form className="reservation-form">
          <h2 class name="reservation-headerReservation">Make a Reservation</h2>
          <label className="reservation-label">
            Name:
            <input type="text" name="name" required />                       
          </label>
          <br />
          <label className="reservation-label">
            Date:
            <input type="date" name="date" required />
          </label>
          <br />
          <label className="reservation-label">
            Time:
            <input type="time" name="time" required />
          </label>
          <br />
          <label className="reservation-label">
            Number of Guests:
            <input type="number" name="guests" min="1" required />
          </label>
          <br />
          <button className="reservation-button"  type="submit">Reserve</button>
        </form>
      </div>
    );
  }
}

export default Reservation;