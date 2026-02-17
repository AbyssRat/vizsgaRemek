import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Rentals() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    axios.get("/rentals")
      .then(res => setRentals(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Your Rentals</h1>
      {rentals.length === 0 ? <p>No rentals yet.</p> : (
        <ul>
          {rentals.map(r => (
            <li key={r.id}>{r.bookTitle} - {r.dueDate}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
