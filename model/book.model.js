import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const Book = mongoose.model("Book", bookSchema);//The data comes from this schema'bookSchema' stored in 'Book' collextion;Mondodb auto adds "s" in Book as Books in database cllection

export default Book;