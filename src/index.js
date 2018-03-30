import express from 'express';
import { createConnection } from "typeorm";
import 'reflect-metadata';
import { Book } from './entity/Book';

const app = express();

createConnection().then(connection => {

  let bookRepository = connection.getRepository(Book);

  app.post('/', async (req, res) => {
    let book = new Book();
    book.title = 'the alchemist';
    const savedBook = await bookRepository.save(book);
    console.log('book has been saved, book id: ' + savedBook.id);
    res.status(200).json({message: 'added book'});
  });

  app.get('/', async (req, res) => {
    const books = await bookRepository.find();
    // const books = await bookRepository.query(`select * from book`);
    res.status(200).json({books});
  });

}).catch(error => console.log("Error: ", error));

export { app };
