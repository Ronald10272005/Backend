import pool from '../config/db.js';

//read
export const fetchAllBooks = async () => {
  const [rows] = await pool.query("SELECT * FROM books");
  return rows;
};

//insert
export const insert = async (books) =>{
    const [result] = await pool.query(
        "INSERT INTO books (name, author) VALUES (?, ?)",
        [books.name, books.author]
    );
    return result.insertId;
}

//update
export const update = async (books) => {
    const [result] = await pool.query(
        "UPDATE books SET name = ?, author = ? WHERE id = ?",
        [books.name, books.author, books.id]
    );
    return result.affectedRows;
}

//delete 
export const remove = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM books WHERE id = ?", [id]
    );
    return result.affectedRows;
}