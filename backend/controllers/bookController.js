import { getAllBooks, getBookById } from "../models/bookModel.js";

export const getBooks = async (req, res, next) => {
    try {
        const books = await getAllBooks();
        res.json(books);
    } catch (err) {
        next(err);
    }
};

export const getBook = async (req, res, next) => {
    try {
        const book = await getBookById(req.params.id);
        if (!book) return res.status(404).json({ message: "Not found" });
        res.json(book);
    } catch (err) {
        next(err);
    }
};
