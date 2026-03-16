import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../auth/authContext";

export default function Rentals() {

  const { user } = useAuth();
  const [rentals, setRentals] = useState([]);

  useEffect(() => {

    api.get(`/rentals/${user.user_id}`)
      .then(res => setRentals(res.data));

  }, []);

  const returnBook = async (id) => {

    await api.delete(`/rentals/${id}`);

    setRentals(rentals.filter(r => r.user_book_id !== id));

  };

  return (
    <div>

      <h1>My Rentals</h1>

      {rentals.map(r => (

        <div key={r.user_book_id}>

          <h3>{r.title}</h3>

          <p>End: {r.end_date}</p>

          <button onClick={() => returnBook(r.user_book_id)}>
            Return
          </button>

        </div>

      ))}

    </div>
  );

}
