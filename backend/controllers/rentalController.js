import { rentBook, getUserRentals } from "../models/rentalModel.js";

export const rent = async (req, res, next) => {
  console.log("Renting book with data:", req.body);

  try {
    const { items } = req.body;
    const user_id = req.user.user_id;

    // alap validáció
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ message: "Invalid items format" });
    }

    // könyv ellenőrzés (opcionális, de ajánlott)
    if (items.length === 0) {
      return res.status(400).json({ message: "No items to rent" });
    } else if (items.some((item) => !item.book_id || !item.rental_days)) {
      return res
        .status(400)
        .json({ message: "Each item must have book_id and rental_days" });
    }
    // pl. létezik-e, van-e elég credit stb.

    const rentalId = await rentBook(req.user.user_id, items);

    res.status(201).json({
      message: "Rental successful",
      rentalId,
    });
  } catch (err) {
    next(err);
  }
};

export const myRentals = async (req, res, next) => {
  try {
    const rentals = await getUserRentals(req.params.id);
    res.json(rentals);
  } catch (err) {
    next(err);
  }
};
