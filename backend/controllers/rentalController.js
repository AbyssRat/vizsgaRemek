import { rentBook, getUserRentals } from "../models/rentalModel.js";

export const rent = async (req, res, next) => {
    try {
        const { bookId, rentalDays } = req.body;
        const userId = req.user.user_id;

        const rentalId = await rentBook(
            userId,
            bookId,
            new Date(),
            rentalDays
        );

        res.status(201).json({ rentalId });
    } catch (err) {
        next(err);
    }
};

export const myRentals = async (req, res, next) => {
    try {
        const rentals = await getUserRentals(req.user.user_id);
        res.json(rentals);
    } catch (err) {
        next(err);
    }
};
